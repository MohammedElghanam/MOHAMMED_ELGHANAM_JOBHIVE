import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './entities/offer.entity';
import { AuthMiddleware } from 'src/common/auth.middleware';
import { Auth, UserSchema } from 'src/auth/entities/auth.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }, { name: Auth.name, schema: UserSchema}])],
  controllers: [OffersController],
  providers: [OffersService],
  // exports: [MongooseModule],
})
export class OffersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(OffersController);
  }
}
