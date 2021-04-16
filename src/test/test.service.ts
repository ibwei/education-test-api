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
    return await this.testRespository.insert({
      scoreArray: test.scoreArray,
      answerArray: test.answerArray,
      questionArray: test.questionArray,
      allScore: test.allScore,
      user_id: user_id,
    });
  }
}
