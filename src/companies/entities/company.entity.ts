import { BaseEntity } from '../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'companies' })
export class Company extends BaseEntity {
  @Column({ length: 50 })
  alias: string;

  @Column({ name: 'trade_name' })
  trade_name: string;

  @Column({ length: 20 })
  rfc: string;

  @Column({ name: 'fiscal_regime' })
  fiscal_regime: string;

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

  @Column({ length: 20 })
  mobil: string;

  @Column({ length: 100 })
  email: string;
}
