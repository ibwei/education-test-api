import { Part } from 'src/part/part.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '题目',
  })
  title: string;

  @Column({
    length: 300,
    type: 'varchar',
    comment: 'A 答案',
    nullable: false,
    default: '',
  })
  a_answer: string;

  @Column({
    length: 300,
    type: 'varchar',
    comment: 'B 答案',
    nullable: false,
    default: '',
  })
  b_answer: string;

  @Column({
    length: 300,
    type: 'varchar',
    comment: 'C 答案',
    nullable: false,
    default: '',
  })
  c_answer: string;

  @Column({
    length: 300,
    type: 'varchar',
    comment: 'D 答案',
    nullable: false,
    default: '',
  })
  d_answer: string;

  @Column({
    type: 'tinyint',
    nullable: false,
    comment: 'A 得分',
    default: 0,
  })
  a_score: number;

  @Column({
    type: 'tinyint',
    nullable: false,
    comment: 'B 得分',
    default: 0,
  })
  b_score: number;

  @Column({
    type: 'tinyint',
    nullable: false,
    comment: 'C 得分',
    default: 0,
  })
  c_score: number;

  @Column({
    type: 'tinyint',
    nullable: false,
    comment: 'D 得分',
    default: 0,
  })
  d_score: number;

  @Column({
    type: 'tinyint',
    comment: '板块Id',
    nullable: false,
    default: 0,
  })
  part_id: number;

  @Column({
    type: 'tinyint',
    comment: '板块状态，0:禁用，1:正常',
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
    () => Part,
    part => part.question,
  )
  part: Part;
}
