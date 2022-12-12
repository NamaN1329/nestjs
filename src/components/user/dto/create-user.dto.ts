import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { Match } from '../validations/match.decorator';
import { UniqueEmail } from '../validations/uniqueEmail';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @UniqueEmail()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;


  @Match('password')
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  passwordConfirm: string;
}
