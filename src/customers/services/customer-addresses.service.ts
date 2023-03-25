import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateCustomerAddressDto } from '../dto/create-customer-address.dto';
import { UpdateCustomerAddressDto } from '../dto/update-customer-address.dto';
import { CustomerAddress } from '../entities/customer-address.entity';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectRepository(CustomerAddress)
    private customerAddressRespository: Repository<CustomerAddress>,
    @InjectRepository(Customer) private customerRepositoy: Repository<Customer>,
  ) {}

  async create(data: CreateCustomerAddressDto) {
    const customer = await this.customerRepositoy.findOneBy({
      id: data.customer_id,
    });
    const newAddress = plainToClass(CustomerAddress, data);
    newAddress.customer = customer;
    return await this.customerAddressRespository.save(newAddress);
  }

  findAll() {
    return this.customerAddressRespository.find();
  }

  async findOne(id: number) {
    const address = await this.customerAddressRespository.findOneBy({ id: id });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    return address;
  }

  async update(id: number, data: UpdateCustomerAddressDto) {
    const address = await this.customerAddressRespository.findOneBy({ id: id });
    const customer = await this.customerRepositoy.findOneBy({
      id: data.customer_id,
    });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    const updateData = plainToClass(CustomerAddress, data);
    updateData.customer = customer;
    this.customerAddressRespository.merge(address, updateData);
    return await this.customerAddressRespository.save(address);
  }

  async remove(id: number) {
    const address = await this.customerAddressRespository.findOneBy({ id: id });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    return await this.customerAddressRespository.softDelete(id);
  }

  async findByCustomer(id: number) {
    const customer = await this.customerRepositoy.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    return this.customerAddressRespository.find({
      where: { customer: { id: customer.id } },
    });
  }
}
