import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  @IsString()
  postImage: string;
}
