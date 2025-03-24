
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Auth } from '../../auth/entities/auth.entity'

@Schema({ timestamps: true })
export class Offer extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  contract: string;

  @Prop({ required: true })
  lieu: string;

  @Prop({ type: [String], required: true })
  technologies: string[];

  @Prop({ type: Types.ObjectId, ref: 'Auth', required: true })
  creator: Types.ObjectId;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);