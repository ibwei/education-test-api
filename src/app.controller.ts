import { Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard, Public } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { httpResponse } from './utils/http.helper';
import { UsersService } from './users/users.service';

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

  @UseGuards(LocalAuthGuard) //  这里会先去执行 guards 里面的逻辑
  @Post('login')
  async login(@Query() { username, password }, @Res() res) {
    const user = await this.authService.validateUser(username, password);
    httpResponse(res, user, 0, '登录成功');
  }

  @Public()
  @UseGuards(LocalAuthGuard) //  这里会先去执行 guards 里面的逻辑
  @Post('auth/login')
  async authlogin(@Query() { username, password }, @Res() res) {
    console.log(`开始执行里面的具体登录逻辑`);
    const user = await this.authService.login({ username, password });
    httpResponse(res, user, 0, '登录成功');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Query() {}, @Res() res) {
    const user = await this.userService.getUserInfoById(1);

    httpResponse(res, user, 0, '获取用户信息成功');
  }
}
