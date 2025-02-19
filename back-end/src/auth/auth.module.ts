import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from './entities/auth.entity';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt'}),

    JwtModule.registerAsync({
      inject: [ ConfigService ],
      useFactory: (config: ConfigService) => {
        return{
          secret: config.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn:  config.get<string | number>('JWT_EXPIRES')
          }
        }
      }
    }),
    
    MongooseModule.forFeature([{ name: 'Auth', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
