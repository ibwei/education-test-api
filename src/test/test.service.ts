import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, Repository } from 'typeorm';
import { Test } from './test.entity';
import { SubmitTestDto } from './test.dto';

@Injectable()
export class TestService {
  private connection: Connection;
  constructor(
    @InjectRepository(Test) private testRespository: Repository<Test>,
  ) {
    this.connection = getConnection();
  }

  /**
   * @description 提交试卷并保存到数据库
   * @date 2021-04-16
   * @param {any} test:SubmitTestDto
   * @returns {any}
   */
  async save(test: SubmitTestDto, user_id: number) {
    try {
      return await this.testRespository.insert({
        scoreArray: test.scoreArray,
        answerArray: test.answerArray,
        questionArray: test.questionArray,
        allScore: test.allScore,
        user_id: user_id,
        created_at: Date(),
      });
    } catch {
      return 0;
    }
  }

  /**
   * 获取用户提交的历史试题
   * @date 2021-04-16
   * @param {any} userId:number
   * @param {any} pageSize:number
   * @param {any} pageNum:number
   * @returns {any}
   */
  async history(userId: number, pageSize: number, pageNum: number) {
    try {
      return await this.testRespository.find({
        where: { user_id: userId },
        order: {
          created_at: 'DESC',
        },
        skip: pageSize * (pageNum - 1),
        take: pageSize,
      });
    } catch {
      return 0;
    }
  }
}
