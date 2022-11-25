import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { CustomEmailValidation } from '../validations/customEmailValidation';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Validate(CustomEmailValidation)
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
