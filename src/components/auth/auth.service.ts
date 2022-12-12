import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { UserService } from '../user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService){}

 async validateUser(username: string, password: string): Promise<any> {
  const user = await this.userService.findByCondition({ email :username});
  if (user && user.password === password) {
      const { password, name, ...rest } = user; 
      return rest;   
  }
  return null;
}
}
