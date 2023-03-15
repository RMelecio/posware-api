import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@Entity({ name: 'warehouse_locations' })
export class WarehouseLocation extends BaseEntity {
  @Column({ length: 30 })
  alias: string;

  @Column({ length: 20 })
  floor: string;

  @Column({ length: 20 })
  aisle: string;

  @Column({ length: 20 })
  rack: string;

  @Column({ length: 20 })
  level: string;

  @Column({ length: 20 })
  bin: string;

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.id)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;
}
