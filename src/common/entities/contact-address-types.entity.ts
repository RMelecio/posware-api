import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'contact_address_types' })
export class ContactAddressType extends BaseEntity{
  @Column()
  name: string;
}