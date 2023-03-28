import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'parameters' })
export class Parameter extends BaseEntity {
  @Column()
  category: string;

  @Column()
  parameter: string;

  @Column()
  available_values: string;

  @Column({ nullable: true })
  origin_remote: string;

  @Column()
  selected_value: string;
}
