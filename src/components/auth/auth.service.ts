import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userService: UserService){}

 async validateUser(email: string, password: string): Promise<any> {
  const user = await this.userService.findByCondition({ "email" :email});
  console.log(await bcrypt.hash(password,10));
  
  if (user && bcrypt.compare(user.password, await bcrypt.hash(password,10))) {
      const { password, ...result } = user; 
      return result;   
  }
  return null;
}
}
