import { Controller, Get, Res } from '@nestjs/common';
import { httpResponse } from 'src/utils/http.helper';
import { QuestionService } from './question.service';
import { PartService } from '../part/part.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private partService: PartService,
  ) {}

  /**
   * @description 获取试题列表,首先依次读取板块列表，并且依次从每个板块中读取五道题目
   * @date 2021-04-16
   * @returns {any}
   */
  @Get()
  async list(@Res() res) {
    const partList = await this.partService.findAll();
    if (partList) {
      const promises = partList.map(async item => {
        return await this.questionService.getRandomRecordByPartId(item.id, 5);
      });
      let questionList = [];
      await Promise.all(promises).then(list => {
        questionList = list;
      });
      return httpResponse(res, questionList, 0, '获取试题成功');
    }
    return httpResponse(res, null, 1, '获取试题失败，没有获取到板块列表。');
  }
}
