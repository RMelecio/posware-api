import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  image_url: string;

  @ManyToOne(() => Category, (category) => category.id, { nullable: true })
  @JoinColumn({ name: 'parent_category_id ' })
  parent_category: Category;

  @Column({ nullable: true })
  returnable_days: number;

  @Column({ default: true })
  is_active: boolean;
}
