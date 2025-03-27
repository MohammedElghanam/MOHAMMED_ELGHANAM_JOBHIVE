import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import {Offer} from '../offers/entities/offer.entity'
import { Response } from 'express'
import { Auth } from './entities/auth.entity';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() loginDto: CreateAuthDto, @Res() res: Response){
      // console.log("hello");
        try {
            const result = await this.authService.register(loginDto);
            return res.status(201).json({
                message: result.message,
                user: result.user,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    @Post('/login')
    async login (@Body() loginDto: CreateAuthDto, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.authService.login(loginDto);
            return res.status(200).json({
                token: result.token,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    @Post(':userId/save/:offerId')
    async saveOffer(@Param('userId') userId: string, @Param('offerId') offerId: string) {
        return this.authService.saveOffer(userId, offerId);
    }

    @Post(':userId/apply/:offerId')
    async applyForOffer(@Param('userId') userId: string, @Param('offerId') offerId: string) {
        return this.authService.applyForOffer(userId, offerId);
    }

    @Get(':userId/saved-offers')
    async getUserSavedOffers(@Param('userId') userId: string): Promise<Auth> {
        return this.authService.getUserSavedOffers(userId);
    }

    

  
}
