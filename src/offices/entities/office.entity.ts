import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { BaseEntity } from '../../common/entities/base.entity';
import { OfficeType } from './office-type.entity';
import { Company } from '../../companies/entities/company.entity';

@Entity({ name: 'offices' })
export class Office extends BaseEntity {
  @Column({ length: 50 })
  alias: string;

  @Column()
  name: string;

  @ManyToOne(() => OfficeType, (officeType) => officeType.id)
  @JoinColumn({ name: 'office_type_id' })
  office_type: OfficeType;
  
  @OneToMany(() => Warehouse, (warehouse) => warehouse.id)
  warehouses: Warehouse[];

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'company_id'})
  company: Company;

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
