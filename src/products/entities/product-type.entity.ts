import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'product_types' })
export class ProductType extends BaseEntity {
  @Column()
  name: string;
}
