import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { UniqueEmail } from '../validations/uniqueEmail';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @UniqueEmail()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
