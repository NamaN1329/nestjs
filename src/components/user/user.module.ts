import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { UniqueEmailConstraint } from './validations/uniqueEmail';

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
  },
  UniqueEmailConstraint
  ],
})
export class UserModule {}
