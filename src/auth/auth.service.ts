import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
const md5 = require('md5');

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new UnauthorizedException({
        status: 200,
        data: { resultCode: 1, resultMessage: '登录账号或者密码错误' },
      });
    }
    if (user && user.password === md5(password)) {
      const token = await this.login(user);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return { token, user: result };
    }
    return 0;
  }

  async login(user: User) {
    const payload = { username: user.name, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
