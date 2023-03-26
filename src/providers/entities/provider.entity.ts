import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { PersonType } from '../../common/entities/person-types.entity';
import { ProviderContactAddress } from './provider-contact-address.entity';

@Entity({name: 'providers' })
export class Provider extends BaseEntity {
  @Column()
  alias:string

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  trade_name: string;

  @Column({ length: 20, unique: true })
  rfc: string;

  @ManyToOne(() => PersonType, (personType) => personType.id)
  @JoinColumn({ name: 'person_type_id' })
  person_type: PersonType;

  @Column({ length: 20, nullable: true })
  mobil: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ nullable: true })
  web_site: string;

  @Column({ nullable: true })
  credit_days: number;

  @Column({ nullable: true })
  payment_conditions: string;

  @OneToMany(() => ProviderContactAddress, (providerContactAddress) => providerContactAddress.provider)
  provider_contact_addresses: ProviderContactAddress[];
}
