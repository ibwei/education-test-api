import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get('sayhello')
  sayHello(): string {
    return this.usersService.userTest();
  }

  @Public()
  @Get('all')
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
