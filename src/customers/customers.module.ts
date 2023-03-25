import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { Customer } from './entities/customer.entity';
import { CustomerType } from './entities/customer-type.entity';
import { CustomerAddressController } from './controllers/customer-addresses.controller';
import { CustomerAddressService } from './services/customer-addresses.service';
import { CustomerAddress } from './entities/customer-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, CustomerType, CustomerAddress]),
  ],
  controllers: [CustomersController, CustomerAddressController],
  providers: [CustomersService, CustomerAddressService],
})
export class CustomersModule {}
