import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'brands' })
export class Brand extends BaseEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  image_url: string;

  @Column({ default: true })
  is_active: boolean;
}
