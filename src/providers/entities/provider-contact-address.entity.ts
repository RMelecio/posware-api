import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Provider } from './provider.entity';
import { ContactAddressType } from '../../common/entities/contact-address-types.entity';

@Entity({ name: 'provider_contact_addresses' })
export class ProviderContactAddress extends BaseEntity {
  @ManyToOne(() => Provider, (provider) => provider.id)
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @ManyToOne(() => ContactAddressType, (contactAddressType) => contactAddressType.id)
  @JoinColumn({ name: 'contact_address_type_id'})
  contact_address_type: ContactAddressType;

  @Column()
  name: string;

  @Column({ nullable: true })
  person_title: string;

  @Column({ nullable: true })
  mobil: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  job: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  settlement: string;

  @Column({ nullable: true })
  location: string;

  @Column({ name: 'postal_code', length: 5, nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  reference: string;
}
