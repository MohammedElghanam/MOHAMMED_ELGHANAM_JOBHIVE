import { IsString, IsArray, IsMongoId, IsNotEmpty } from 'class-validator';

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
}