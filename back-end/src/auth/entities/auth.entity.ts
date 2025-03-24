import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
    CONDIDATURE = 'condidature',
    RECRUTEUR = 'recruteur',
  }

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

}

export const UserSchema = SchemaFactory.createForClass(Auth);