import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { CustomerType } from './customer-type.entity';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
	@Column()
  alias: string;

	@Column()
	name: string;

	@Column()
	middle_name: string;

	@Column()
	last_name: string;

	@Column()
	trade_name: string;

	@Column({ length: 20, unique: true })
	rfc: string;

	@ManyToOne(() => CustomerType, customerType => customerType.id)
	@JoinColumn({ name: 'customer_type_id' })
	customer_type: CustomerType;

	@Column({ length: 20 })
	mobil: string;

	@Column({ length: 100 })
	email: string;

	@Column()
	credit_amount: number;

	@Column()
	credit_days: number;
}
