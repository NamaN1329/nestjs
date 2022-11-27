import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CustomEmailValidation } from './validations/customEmailValidation';
import { UserRepositoryInterface } from './interface/user.repository.interface';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [{
    provide: 'UserRepositoryInterface',
    useClass: UserRepository,
  },
  {
    provide: 'UserServiceInterface',
    useClass: UserService,
  }
  ],
})
export class UserModule {}
