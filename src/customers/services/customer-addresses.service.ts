import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateCustomerContactAddressDto } from '../dto/create-customer-contact-address.dto';
import { UpdateCustomerContactAddressDto } from '../dto/update-customer-contact-address.dto';
import { CustomerContactAddress } from '../entities/customer-contact-address.entity';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectRepository(CustomerContactAddress)
    private customerContactAddressRespository: Repository<CustomerContactAddress>,
    @InjectRepository(Customer) private customerRepositoy: Repository<Customer>,
  ) {}

  async create(data: CreateCustomerContactAddressDto) {
    const customer = await this.customerRepositoy.findOneBy({
      id: data.customer_id,
    });
    const newAddress = plainToClass(CustomerContactAddress, data);
    newAddress.customer = customer;
    return await this.customerContactAddressRespository.save(newAddress);
  }

  findAll() {
    return this.customerContactAddressRespository.find();
  }

  async findOne(id: number) {
    const address = await this.customerContactAddressRespository.findOneBy({ id: id });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    return address;
  }

  async update(id: number, data: UpdateCustomerContactAddressDto) {
    const address = await this.customerContactAddressRespository.findOneBy({ id: id });
    const customer = await this.customerRepositoy.findOneBy({
      id: data.customer_id,
    });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    const updateData = plainToClass(CustomerContactAddress, data);
    updateData.customer = customer;
    this.customerContactAddressRespository.merge(address, updateData);
    return await this.customerContactAddressRespository.save(address);
  }

  async remove(id: number) {
    const address = await this.customerContactAddressRespository.findOneBy({ id: id });
    if (!address) {
      throw new NotFoundException(`Address id:${id} not found`);
    }
    return await this.customerContactAddressRespository.softDelete(id);
  }

  async findByCustomer(id: number) {
    const customer = await this.customerRepositoy.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    return this.customerContactAddressRespository.find({
      where: { customer: { id: customer.id } },
    });
  }
}
