import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './test.entity';
import { PartModule } from '../part/part.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [TestController],
  providers: [TestService],
  imports: [TypeOrmModule.forFeature([Test]), PartModule, AuthModule],
})
export class TestModule {}
