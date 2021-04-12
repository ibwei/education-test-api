import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
const md5 = require('md5');

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    console.log('valudateUser', user);
    if (user && user.password === md5(password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    console.log('密码不正确');
    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
