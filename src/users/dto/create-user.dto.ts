import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlpha()
  @Length(3, 40)
  firstName: string;

  @IsNotEmpty()
  @IsAlpha()
  @Length(3, 40)
  lastName: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsAlpha()
  @Length(3, 30)
  country: string;

  @IsNotEmpty()
  @IsAlpha()
  @Length(3, 30)
  city: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(3, 30)
  street: string;

  @IsNotEmpty()
  @Length(1, 10)
  houseNr: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
