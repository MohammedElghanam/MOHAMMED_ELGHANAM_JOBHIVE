import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsArray } from "class-validator";
import { Types } from 'mongoose';

export class CreateAuthDto {
     
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name?: string;
 
    @IsString()
    @IsEmail({}, { message: "Pleas enter correct email"})
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly role: string;

    @IsOptional()
    @IsArray()
    savedOffer?: Types.ObjectId[];

    @IsOptional()
    @IsArray()
    appliedOffers?: Types.ObjectId[];

    @IsOptional()
    @IsArray()
    technologies: string[];

    
}
