import {
    registerDecorator, ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments
} from "class-validator";
import { Inject } from "@nestjs/common";
import { UserRepository } from "src/repositories/user.repository";

@ValidatorConstraint({ async: true })
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(@Inject('UserRepositoryInterface')
  private readonly userRepository: UserRepository) {}
    
  validate(userName: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {      
    return this.userRepository.findByCondition({ email :userName}).then(result => {
        return !result;
      });
    }

    defaultMessage(args: ValidationArguments) {
      // here you can provide default error message if validation failed
      return `email $value is already exists`;
    }
}

export function UniqueEmail(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: UniqueEmailConstraint,
      });
    };
  }