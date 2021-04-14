import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import { httpResponse } from 'src/utils/http.helper';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get('sayhello')
  sayHello(): string {
    return this.usersService.userTest();
  }

  @Get('all')
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Query() {}, @Res() res) {
    const user = {};
    httpResponse(res, user, 0, '获取用户信息成功');
  }
}
