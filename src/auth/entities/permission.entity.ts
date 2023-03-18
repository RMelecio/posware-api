import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'profiles' })
export class Profile extends BaseEntity {
  @Column({ length: 30 })
  name: string;

  @Column()
  description: string;

  @Column({ name: 'is_active', default: true })
  is_active: boolean;

  @OneToMany(() => User, (user) => user.id)
  users: User[];
}
