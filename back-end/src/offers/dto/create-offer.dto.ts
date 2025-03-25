import { IsString, IsArray, IsMongoId, IsNotEmpty, IsOptional} from 'class-validator';
import { Types } from 'mongoose';

export class CreateOfferDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsString()
  contract: string;

  @IsString()
  lieu: string;

  @IsArray()
  technologies: string[];

  @IsMongoId()
  @IsNotEmpty()
  creator: string;

  @IsOptional()
  @IsArray()
  savedByUsers?: Types.ObjectId[];

  @IsOptional()
  @IsArray()
  applicants?: Types.ObjectId[]; 
}