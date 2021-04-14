import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('part')
export class Part {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    type: 'varchar',
    unique: true,
  })
  name: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '5-10分评测结果',
    nullable: true,
    default: '',
  })
  a_answer: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '11-15分评测结果',
    nullable: true,
    default: '',
  })
  b_answer: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '16-20分评测结果',
    nullable: true,
    default: '',
  })
  c_answer: string;

  @Column({
    length: 2000,
    type: 'varchar',
    comment: '21-25分评测结果',
    nullable: true,
    default: '',
  })
  d_answer: string;

  @Column({ default: 0, type: 'tinyint', comment: '排序值，值越小，越靠前' })
  order: number;

  @Column({
    length: 50,
    type: 'varchar',
    comment: '板块描述',
    nullable: true,
    default: '',
  })
  description: string;

  @Column()
  deleted_at: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @OneToMany(
    () => Question,
    question => question.part,
  )
  question: Question[];
}
