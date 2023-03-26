import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { Customer } from './entities/customer.entity';
import { PersonType } from '../common/entities/person-types.entity';
import { CustomerAddressController } from './controllers/customer-addresses.controller';
import { CustomerAddressService } from './services/customer-addresses.service';
import { CustomerContactAddress } from './entities/customer-contact-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, PersonType, CustomerContactAddress]),
  ],
  controllers: [CustomersController, CustomerAddressController],
  providers: [CustomersService, CustomerAddressService],
})
export class CustomersModule {}
