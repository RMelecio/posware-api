import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { CreateCustomerContactAddressDto } from '../dto/create-customer-contact-address.dto';
import { UpdateCustomerContactAddressDto } from '../dto/update-customer-contact-address.dto';
import { CustomerAddressService } from '../services/customer-addresses.service';

@ApiTags('Customer Addresses')
@UseGuards(JwtAuthGuard)
@Controller('customer-addresses')
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService,
  ) {}

  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerContactAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerContactAddressDto,
  ) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }

  @Get('customer/:id')
  findByCustomer(@Param('id') id: number) {
    return this.customerAddressService.findByCustomer(id);
  }
}
