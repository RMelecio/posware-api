import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'product_status' })
export class ProductStatus extends BaseEntity {
  @Column()
  name: string;
}
