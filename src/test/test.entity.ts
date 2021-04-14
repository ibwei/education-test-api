import { Part } from 'src/part/part.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('test')
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: ' 题目 ID 数组',
    nullable: false,
  })
  questionArray: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: ' 答案 ID 数组',
    nullable: false,
  })
  answerArray: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '板块得分答案',
    nullable: false,
    default: '',
  })
  scoreArray: string;

  @Column({
    type: 'int',
    comment: '总得分',
    nullable: true,
    default: 0,
  })
  allScore: number;

  @Column({
    type: 'tinyint',
    comment: '试题状态，0:未查看，1:已审核',
    nullable: false,
    default: 0,
  })
  status: number;

  @Column()
  deleted_at: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @ManyToOne(
    () => User,
    user => user.test,
  )
  user: User;
}
