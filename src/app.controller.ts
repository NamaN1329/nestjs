import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './components/auth/local-auth.guard';
import { Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any{
    return req.user
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
