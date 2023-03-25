import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerType } from '../entities/customer-type.entity';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(CustomerType)
    private readonly customerTypeRepository: Repository<CustomerType>,
  ) {}
  async create(data: CreateCustomerDto) {
    const customerType = await this.customerTypeRepository.findOneBy({
      id: data.customer_type_id,
    });

    if (!customerType) {
      throw new NotFoundException(
        `CustomerType id:${data.customer_type_id} not found`,
      );
    }

    const customer = plainToClass(Customer, data);
    customer.customer_type = customerType;

    return this.customerRepository.save(customer);
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: { id: id },
      relations: ['customer_type'],
    });
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    return customer;
  }

  async update(id: number, data: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    const customerType = await this.customerTypeRepository.findOneBy({
      id: data.customer_type_id,
    });
    if (!customerType) {
      throw new NotFoundException(
        `CustomerType id:${data.customer_type_id} not found`,
      );
    }

    const updateCustomer = plainToClass(Customer, data);
    updateCustomer.customer_type = customerType;
    this.customerRepository.merge(customer, updateCustomer);
    return await this.customerRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.customerRepository.findOneBy({ id: id });
    if (!customer) {
      throw new NotFoundException(`Customer id:${id} not found`);
    }
    return await this.customerRepository.softDelete(id);
  }
}
