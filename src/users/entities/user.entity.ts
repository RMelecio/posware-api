import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ name: 'user_name', unique: true })
  user_name: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ name: 'middle_name' })
  middle_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'mobil', unique: true })
  mobil: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column()
  role: number;
}
