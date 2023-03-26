import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { PersonType } from '../../common/entities/person-types.entity';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @Column()
  alias: string;

  @Column()
  name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column()
  trade_name: string;

  @Column({ length: 20, unique: true })
  rfc: string;

  @ManyToOne(() => PersonType, (personType) => personType.id)
  @JoinColumn({ name: 'person_type_id' })
  person_type: PersonType;

  @Column({ length: 20 })
  mobil: string;

  @Column({ length: 100 })
  email: string;

  @Column({ nullable: true })
  web_site: string;

  @Column()
  credit_amount: number;

  @Column()
  credit_days: number;
}
