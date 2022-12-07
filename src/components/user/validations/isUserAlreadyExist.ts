import {
    registerDecorator, ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments
} from "class-validator";
import { Inject } from "@nestjs/common";
import { UserServiceInterface } from "../interface/user.service.interface";

@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
  constructor(@Inject('UserServiceInterface')
  private readonly userService: UserServiceInterface) {}
    
  validate(userName: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    console.log(this.userService);
      
    return this.userService.findByCondition(userName).then(user => {
        if (user) return false;
        return true;
      });
    }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsUserAlreadyExistConstraint,
      });
    };
  }