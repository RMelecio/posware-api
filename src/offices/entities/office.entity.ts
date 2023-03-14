import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from '../../common/entities/base.entity';
import { OfficeTypes } from "./officeTypes.entity";

@Entity({ name: 'offices'})
export class Office extends BaseEntity {
  @Column({ length: 50 })
  alias: string;

  @Column()
  name: string
  
  @ManyToOne(() => OfficeTypes, (officeType) => officeType.id)
  @JoinColumn({ name: "office_type_id" })
  office_type: OfficeTypes;

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
