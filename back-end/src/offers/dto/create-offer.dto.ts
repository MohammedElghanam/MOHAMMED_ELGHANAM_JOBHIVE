import { IsString, IsArray } from 'class-validator';

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

  @IsString()
  creator: string;
}