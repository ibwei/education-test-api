import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from './config/database.config';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot(DATABASE_CONFIG)],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
