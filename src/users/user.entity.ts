import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Sex {
  male = 1,
  female = 2,
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: 0 })
  gender: number; // 1男，2 女

  @Column()
  avatar: string;

  @Column()
  phone: string;

  @Column()
  parent_phone: string;

  @Column()
  grade: string;

  @Column()
  school_name: string;

  @Column()
  description: string;

  @Column()
  type: number;

  @Column()
  deleted_at: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
