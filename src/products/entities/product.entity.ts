import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
import { LengthUnit } from './length-unit.entity';
import { MeasurementUnit } from './measurement-unit.entity';
import { ProductStatus } from './product-status.entity';
import { ProductType } from './product-type.entity';
import { VolumeUnit } from './volume-unit.entity';
import { WeightUnit } from './weight-unit.entity';
@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @ManyToOne(() => Brand, (brand) => brand.id)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => ProductStatus, (productStatus) => productStatus.id)
  @JoinColumn({ name: 'product_status_id' })
  status: ProductStatus;

  @Column({ length: 50, nullable: true })
  short_name: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  full_name: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  url_imagen: string;

  @Column()
  upc: string;

  @Column()
  part_number: string;

  @Column({ type: 'boolean' })
  has_serial_number: boolean;

  @ManyToOne(() => MeasurementUnit, (measurementUnit) => measurementUnit.id)
  @JoinColumn({ name: 'measurement_unit_id' })
  measurement_unit: MeasurementUnit;

  @Column({ type: 'boolean' })
  has_taxes: boolean;

  @ManyToOne(() => ProductType, (productType) => productType.id)
  @JoinColumn({ name: 'product_type_id' })
  product_type: ProductType;

  @Column({ nullable: true })
  returnable_days: number;

  @Column({ nullable: true })
  warranty_days: number;

  @Column()
  default_price: number;

  @Column({ nullable: true })
  default_cost: number;

  @Column({ nullable: true })
  average_cost: number;

  @ManyToOne(() => WeightUnit, (weightUnit) => weightUnit.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'weight_unit_id' })
  weight_unit: WeightUnit;

  @Column({ nullable: true })
  weight: number;

  @ManyToOne(() => VolumeUnit, (volumenUnit) => volumenUnit.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'volumen_unit_id' })
  volumen_unit: VolumeUnit;

  @Column({ nullable: true })
  volumen: number;

  @ManyToOne(() => LengthUnit, (lengthUnit) => lengthUnit.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'length_unit_id' })
  length_unit: LengthUnit;

  @Column({ nullable: true })
  length: number;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  width: number;

  @Column({ type: 'boolean' })
  is_purchasable: boolean;

  @Column({ nullable: true })
  cfdi_prodserv_code: string;

  @Column({ nullable: true })
  cfdi_unit_code: string;

  @Column({ nullable: true })
  max_stock: number;

  @Column({ nullable: true })
  min_stock: number;
}
