import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

export interface UserServiceInterface {
    create(userDto: CreateUserDto): Promise<User>;
}