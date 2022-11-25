import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@ValidatorConstraint({ name: 'emailId', async: true })
@Injectable()
export class CustomEmailValidation implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    return await this.userRepository
      .find({ where: { email: value } })
      .then((user) => {
        console.log(user.length);
        if (user.length > 0) return false;
        return true;
      });
  }
  defaultMessage(args: ValidationArguments) {
    return 'Email already exist';
  }
}
