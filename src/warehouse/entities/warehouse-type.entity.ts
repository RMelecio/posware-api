import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@Entity({ name: 'warehouse_types' })
export class WarehouseType extends BaseEntity {
  @Column({ length: 20 })
  name: string;

  @OneToMany(() => Warehouse, (warehouse) => warehouse.warehouse_type)
  warehouses: Warehouse[];
}
