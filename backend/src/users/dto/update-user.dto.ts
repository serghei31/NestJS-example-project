import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @Length(3, 40)
  firstName: string;

  @IsString()
  @Length(3, 40)
  lastName: string;

  @IsString()
  description: string;

  @IsString()
  @Length(3, 30)
  country: string;

  @IsString()
  @Length(3, 30)
  city: string;

  @IsString()
  @Length(3, 30)
  street: string;

  @IsString()
  @Length(1, 10)
  houseNr: string;

  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsStrongPassword()
  passwordConfirm: string;
}
