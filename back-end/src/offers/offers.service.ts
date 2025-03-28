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

    const savedOffer = await newOffer.save();

    const users = await this.authModel.find();

    const matchingUsers = users.filter(user => {
        const commonTechnologies = user.technologies.filter(tech =>
            createOfferDto.technologies.includes(tech)
        );
        return commonTechnologies.length >= 2;
    });

    await Promise.all(
        matchingUsers.map(async (user) => {
            await this.offerModel.findByIdAndUpdate(savedOffer._id, {
                $push: { applicants: user._id }
            });

            await this.authModel.findByIdAndUpdate(user._id, {
                $push: { appliedOffers: savedOffer._id }
            });
        })
    );

    return savedOffer;
}


  async findAll(recruiterId: string): Promise<Offer[]> {
    return this.offerModel.find({ creator: new Types.ObjectId(recruiterId) }).exec();
  }

  async findAllOffers(userId: string): Promise<Offer[]> {
    if (!Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid userId format');
    }
    return this.offerModel.find({ 'applicants': { $ne: new Types.ObjectId(userId)} }).exec();
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


  async getAppliedOffers(userId: string): Promise<Offer[]> {
    const user = await this.authModel.findById(userId);
    
    if (!user) {
        throw new NotFoundException('User not found');
    }

    const offers = await this.offerModel.find({ _id: { $in: user.appliedOffers } }).populate({
        path: 'applicants',
        select: '-password',
        model: 'Auth',
    });

    return offers;
}

}
