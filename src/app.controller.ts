import { Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/jwt-auth.guard';
import { httpResponse } from './utils/http.helper';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @UseGuards(AuthGuard('local')) //  这里会先去执行 guards 里面的逻辑
  @Post('auth/login')
  async authlogin(@Query() { username, password }, @Res() res) {
    console.log(`开始执行里面的具体登录逻辑`);
    const userInfo = await this.authService.validateUser(username, password);
    if (userInfo) {
      return httpResponse(res, userInfo, 0, '登录成功');
    }
    return httpResponse(res, null, 1, '账号或者密码错误');
  }
}
