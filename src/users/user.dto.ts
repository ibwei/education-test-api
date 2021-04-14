import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString({ message: '用户名只能为字符' })
  @MaxLength(50, { message: '用户名不能超过 50 个字' })
  @MinLength(2, { message: '用户名小于 2 个字' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码只能为字符' })
  @MaxLength(50, { message: '密码不能超过 16 ' })
  password: string;
}
