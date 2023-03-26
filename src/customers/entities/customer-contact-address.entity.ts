import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Customer } from './customer.entity';
import { ContactAddressType } from '../../common/entities/contact-address-types.entity';

@Entity({ name: 'customer_contact_addresses' })
export class CustomerContactAddress extends BaseEntity {
  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => ContactAddressType, (contactAddressType) => contactAddressType.id)
  @JoinColumn({ name: 'contact_address_type_id'})
  contact_address_type: ContactAddressType;

  @Column()
  name: string;

  @Column()
  person_title: string;

  @Column()
  mobil: string;

  @Column()
  email: string;

  @Column()
  job: string;

  @Column()
  notes: string;

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
  reference: string;
}
