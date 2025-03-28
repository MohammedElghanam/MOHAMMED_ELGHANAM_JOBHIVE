import { IsString, IsArray, IsEmail, IsOptional } from 'class-validator';

export class UpdateAuthDto {
  @IsString()
  @IsOptional() 
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsArray()
  @IsOptional()
  technologies?: string[];
}
