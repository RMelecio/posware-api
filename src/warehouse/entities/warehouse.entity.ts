import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { WarehouseLocation } from './location.entity';
import { WarehouseType } from './warehouse-type.entity';
import { Office } from '../../offices/entities/office.entity';

@Entity({ name: 'warehouses' })
export class Warehouse extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'is_active' })
  is_active: boolean;

  @ManyToOne(() => Office, (office) => office.id)
  @JoinColumn({ name: 'office_id'})
  office: Office;

  @ManyToOne(() => WarehouseType, (warehouseType) => warehouseType.id)
  @JoinColumn({ name: 'warehose_type_id' })
  warehose_type: WarehouseType;

  @OneToMany(() => WarehouseLocation, (warehoseLocation) => warehoseLocation.id)
  warehouse_location: WarehouseLocation[];
}
