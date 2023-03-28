import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'volume_units' })
export class VolumeUnit extends BaseEntity {
  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @Column({ length: 5, nullable: true })
  symbol: string;
}
