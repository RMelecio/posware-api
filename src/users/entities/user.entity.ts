import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ name: 'user' })
  user: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'middle_name' })
  middle_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'mobil' })
  mobil: string;

  @Column({ name: 'email' })
  email: string;
}
