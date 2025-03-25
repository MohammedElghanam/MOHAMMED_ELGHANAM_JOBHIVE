import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../../types/index"
import { Types } from 'mongoose';
import { Offer } from '../../offers/entities/offer.entity'

@Schema({ timestamps: true })
export class Auth {

    @Prop()
    name: string;

    @Prop({ unique:[true, 'Duplicate email enterd']})
    email: string;

    @Prop()
    password: string;

    @Prop({required: true, enum: UserRole, default: UserRole.CONDIDATURE })
    role: UserRole;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Offer' }], default: [] })
    savedOffers: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Offer' }], default: [] })
    appliedOffers: Types.ObjectId[];

}

export const UserSchema = SchemaFactory.createForClass(Auth);