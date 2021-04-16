import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

const md5 = require('md5');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // 测试网络连通的方法
  userTest(): string {
    return md5('admin');
  }

  /**
   * @description 根绝 Id 获取用户详细信息
   * @date 2021-04-13
   * @param {number} id - 用户的 ID
   * @returns {any}
   */
  async getUserInfoById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  /**
   * @description 根绝 name 获取用户详细信息
   * @date 2021-04-13
   * @param {number} id - 用户的 ID
   * @returns {any}
   */
  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { name: username } });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
