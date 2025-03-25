import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Offer } from './entities/offer.entity';
import { Auth } from 'src/auth/entities/auth.entity';

@Injectable()
export class OffersService {

  constructor(
    @InjectModel(Offer.name) private offerModel: Model<Offer>,
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>
  ) {}
  
  async create(createOfferDto: CreateOfferDto, token: string): Promise<Offer> {
    const newOffer = new this.offerModel({
      ...createOfferDto,
      creator: new Types.ObjectId(token)
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

  async getOfferWithApplicants(offerId: string): Promise<Offer> {
    const offer = await this.offerModel.findById(offerId).populate({
      path: 'applicants',
      select: '-password',
      model: 'Auth'
    });

    if (!offer) {
      throw new NotFoundException('Offer not found');
    }

    return offer;
  }

}
