import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'customer_types' })
export class CustomerType extends BaseEntity{
  @Column()
  name: string;

  @OneToMany(() => Customer, customer => customer.customer_type)
  customers: Customer[];
}