import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { httpResponse } from './utils/http.helper';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard) //  这里会先去执行 guards 里面的逻辑
  @Post('login')
  async login(@Query() { username, password }, @Res() res) {
    const user = await this.authService.validateUser(username, password);
    httpResponse(res, user, 0, '登录成功');
  }
}
