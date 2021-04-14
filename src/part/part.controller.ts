import { Controller, Get, Res } from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { PartService } from './part.service';
import { httpResponse } from '../utils/http.helper';

@Controller('part')
export class PartController {
  constructor(private partService: PartService) {}

  @Public()
  @Get()
  async list(@Res() res) {
    const parts = await this.partService.findAll();
    if (parts) {
      return httpResponse(res, parts, 0, '获取板块列表成功');
    }
    return httpResponse(res, null, 1, '暂无板块列表');
  }
}
