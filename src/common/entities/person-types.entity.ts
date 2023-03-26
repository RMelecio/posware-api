import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity({ name: 'person_types' })
export class PersonType extends BaseEntity{
  @Column()
  name: string;
}