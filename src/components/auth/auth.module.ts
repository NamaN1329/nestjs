import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
@Module({
  imports: [UserModule, PassportModule.register({
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [PassportModule]
})
export class AuthModule {}
