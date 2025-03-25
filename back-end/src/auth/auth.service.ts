import { BadRequestException, Injectable, NotFoundException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model, Types  } from 'mongoose';
import { Auth } from './entities/auth.entity';
import {Offer} from '../offers/entities/offer.entity'
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  
  constructor( 
        @InjectModel(Auth.name) private userModel: Model<Auth>, 
        @InjectModel(Offer.name) private offerModel: Model<Offer>, 
        private jwtService: JwtService        
    ){}

    async register ( loginDto: CreateAuthDto ): Promise<{ message: string, user: object | null }> {
        const { name, email, password, role }= loginDto;

        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) throw new BadRequestException('Email is already in use');

        try {
            const hashPassword = await bcrypt.hash(password, 10)
            const user= await this.userModel.create({
                name,
                email,
                password: hashPassword,
                role
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
                role: user.role,
            });

            return { token };

        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
    }

    async saveOffer(userId: string, offerId: string): Promise<Auth> {
        const user = await this.userModel.findById(userId);
        const offer = await this.offerModel.findById(offerId); 
    
        if (!user || !offer) {
          throw new NotFoundException('User or Offer not found');
        }

        const offerObjectId = new Types.ObjectId(offerId); 
    
        if (!user.savedOffers.includes(offerObjectId)) {
          user.savedOffers.push(offerObjectId);
          await user.save();
        }

        const userObjectId = new Types.ObjectId(userId);
    
        if (!offer.savedByUsers.includes(userObjectId)) {
          offer.savedByUsers.push(userObjectId);
          await offer.save();
        }
    
        return user;
    }

    async applyForOffer(userId: string, offerId: string): Promise<Auth> {
        const user = await this.userModel.findById(userId);
        const offer = await this.offerModel.findById(offerId);
      
        if (!user || !offer) {
          throw new NotFoundException('User or Offer not found');
        }

        const offerObjectId = new Types.ObjectId(offerId); 
      
        if (!user.appliedOffers.includes(offerObjectId)) {
          user.appliedOffers.push(offerObjectId);
          await user.save();
        }

        const userObjectId = new Types.ObjectId(userId);
      
        if (!offer.applicants.includes(userObjectId)) {
          offer.applicants.push(userObjectId);
          await offer.save();
        }
      
        return user;
    }
      
    async getUserSavedOffers(userId: string): Promise<Auth> {
        const user = await this.userModel.findById(userId).populate({
            path: 'savedOffers',
            model: 'Offer'
        });
        
        if (!user) {
        throw new NotFoundException('User not found');
        }
    
    
        return user;
    }
  

}
