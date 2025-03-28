import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, Query } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Request , Response } from 'express'


interface CustomRequest extends Request {
  user?: any;
}

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto, @Req() req: CustomRequest) {
    const token = req.user.userId;
    return this.offersService.create(createOfferDto, token);
  }

  @Get(':recruiterId')
  findAll(@Param('recruiterId') recruiterId: string) {
    return this.offersService.findAll(recruiterId);
  }

  @Get()
  findAllOffers(@Query('userId') userId: string) {
    return this.offersService.findAllOffers(userId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) { 
    return this.offersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.update(id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersService.remove(id);
  }

  @Get(':offerId/appled-offer')
  async getOfferWithApplicants(@Param('offerId') offerId: string) {
    return this.offersService.getOfferWithApplicants(offerId);
  }

  @Get(':userId/applied-offers')
    async getAppliedOffers(@Param('userId') userId: string) {
        return this.offersService.getAppliedOffers(userId);
    }

}
