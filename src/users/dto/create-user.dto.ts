import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 40)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 40)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  city: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  street: string;

  @IsNotEmpty()
  @IsString()
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
