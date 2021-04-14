import { Controller, Get, Post, Res, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/jwt-auth.guard';
import { httpResponse } from './utils/http.helper';
import { Query } from '@nestjs/common';
import { ValidationPipe } from './utils/validate.pipe';
import { LoginDto } from './users/user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @UsePipes(ValidationPipe)
  // @UseGuards(AuthGuard('local')) //  这里会先去执行 guards 里面的逻辑
  @Post('user/login')
  async login(@Query() { username, password }: LoginDto, @Res() res) {
    const userInfo = await this.authService.validateUser(username, password);
    if (userInfo) {
      return httpResponse(res, userInfo, 0, '登录成功');
    }
    return httpResponse(res, null, 1, '账号或者密码错误');
  }
}
