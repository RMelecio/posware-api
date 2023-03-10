import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  name: string;

  @Column({ name: 'middle_name' })
  middle_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'mobil' })
  mobil: string;

  @Column({ name: 'email' })
  email: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updated_at: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
  })
  deleted_at: Date;
}
