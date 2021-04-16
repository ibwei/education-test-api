import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async getRandomRecordByPartId(partId: number, limit: number) {
    // 先把某个各版块的题目全部拉取出来
    const entityManager = getManager();
    // 每个板块随机获取五道题
    const res = await entityManager.query(
      `SELECT * FROM question WHERE part_id = ${partId}  LIMIT ${limit}`,
    );
    return res;
  }
}
