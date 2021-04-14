import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Part } from './part.entity';

@Injectable()
export class PartService {
  constructor(
    @InjectRepository(Part)
    private partRepository: Repository<Part>,
  ) {}

  async findAll() {
    return await this.partRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }
}
