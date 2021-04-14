import { Module } from '@nestjs/common';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Part } from './part.entity';

@Module({
  controllers: [PartController],
  providers: [PartService],
  imports: [TypeOrmModule.forFeature([Part])],
})
export class PartModule {}
