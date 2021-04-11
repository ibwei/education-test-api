import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('sayhello')
  sayHello(): string {
    return this.usersService.userTest();
  }
}
