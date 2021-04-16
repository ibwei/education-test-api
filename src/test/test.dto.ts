import { IsNotEmpty, IsString } from 'class-validator';

export class SubmitTestDto {
  @IsString({ message: '题目ID 列表只能为字符' })
  @IsNotEmpty({ message: '题目ID 列表不能为空' })
  questionArray: string;

  @IsString({ message: '答案列表只能为字符' })
  @IsNotEmpty({ message: '答案列表列表不能为空' })
  answerArray: string;

  @IsString({ message: '得分列表只能为字符' })
  @IsNotEmpty({ message: '得分列表不能为空' })
  scoreArray: string;

  @IsNotEmpty({ message: '没有提交试题总分' })
  allScore: number;
}
