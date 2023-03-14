import { BaseEntity } from '../../common/entities/base.entity';
import { Column, Entity, OneToMany } from "typeorm";
import { Office } from './office.entity';

@Entity({ name: 'office_types' })
export class OfficeTypes extends BaseEntity {
  @Column({ length: 30 })
  name: string

  @OneToMany(() => Office, (office) => office.office_type)
  offices: Office[];
}