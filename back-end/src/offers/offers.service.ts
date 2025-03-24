import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {

  constructor(@InjectModel(Offer.name) private offerModel: Model<Offer>) {}
  
  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const newOffer = new this.offerModel({
      ...createOfferDto,
      creator: "67e043a855aa6712c7dfcddb"
    });
    return newOffer.save();
  }

  async findAll(): Promise<Offer[]> {
    return this.offerModel.find().exec();
  }

  async findOne(id: string): Promise<Offer> {
    return this.offerModel.findById(id).exec();
  }

  async update(id: string, updateOfferDto: UpdateOfferDto): Promise<Offer> {
    return this.offerModel.findByIdAndUpdate(id, updateOfferDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Offer> {
    return this.offerModel.findByIdAndDelete(id).exec();
  }
}
