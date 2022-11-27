import { BaseAbstractRepository } from "./base/base.abstract.repository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/components/user/entities/user.entity";
import { UserRepositoryInterface } from "src/components/user/interface/user.repository.interface";

@Injectable()
export class UserRepository extends BaseAbstractRepository<User>
    implements UserRepositoryInterface {
    constructor(@InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    ) {
        super(usersRepository);
    }
}