import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'customer-addresses' })
export class CustomerAddress extends BaseEntity {
  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  settlement: string;

  @Column()
  location: string;

  @Column({ name: 'postal_code', length: 5 })
  postal_code: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  is_billing: boolean;

  @Column()
  is_delivery: boolean;

  @Column()
  reference: string;

  @Column()
  person_receives_name: string;

  @Column()
  person_receives_mobil: string;

  @Column()
  person_receives_email: string;
}
