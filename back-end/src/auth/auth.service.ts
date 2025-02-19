import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { Auth } from './entities/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  
  constructor( 
    @InjectModel(Auth.name) private userModel: Model<Auth>, 
    private jwtService: JwtService        
){}

async register ( loginDto: CreateAuthDto ): Promise<{ message: string, user: object | null }> {
    const { name, email, password }= loginDto;

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) throw new BadRequestException('Email is already in use');

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const user= await this.userModel.create({
            name,
            email,
            password: hashPassword
        })

        return {
            message: "The user has been created successfully and is ready to use the system.",
            user
        }
    } catch (error) {
        console.error('Error creating user:', error);
        throw new BadRequestException('Failed to create user in the database');
    }
}

async login ( loginDto: CreateAuthDto ): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email })
    if( !user ) throw new Error('User not found');

    try {
        const isMatch = await bcrypt.compare(password, user.password)
        if( !isMatch ) throw new Error('Password incorrect');

        const token = this.jwtService.sign({ 
            userId: user._id, 
            name: user.name,
            email: user.email, 
        });

        return { token };

    } catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
    }
}

}
