import { Body, Controller, Post, Query, Res, UsePipes } from '@nestjs/common';
import { PartService } from '../part/part.service';
import { httpResponse } from '../utils/http.helper';
import { TestService } from './test.service';
import { ValidationPipe } from '../utils/validate.pipe';
import { SubmitTestDto } from './test.dto';
import { AuthService } from '../auth/auth.service';

@Controller('test')
export class TestController {
  constructor(
    private testService: TestService,
    private authService: AuthService,
  ) {}

  /**
   * 描述 保存提交的试题
   * @date 2021-04-16
   * @returns {any}
   */
  @Post()
  async list(@Res() res, @Query() { token }, @Body() test: SubmitTestDto) {
    const user = this.authService.decode(token);
    const change = await this.testService.save(test, user.userId);
    console.log('change', change);
    if (change) {
      return httpResponse(res, null, 0, '提交成功');
    }
    return httpResponse(res, null, 1, '获取试题失败，没有获取到板块列表。');
  }
}
