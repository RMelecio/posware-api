import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { PersonType } from '../../common/entities/person-types.entity';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(PersonType)
    private readonly personTypeRepository: Repository<PersonType>,
  ) {}
  async create(data: CreateCustomerDto) {
    const customerType = await this.personTypeRepository.findOneBy({
      id: data.person_type_id,
    });

    if (!customerType) {
      throw new NotFoundException(
        `CustomerType id:${data.person_type_id} not found`,
      );
    }

    const customer = plainToClass(Customer, data);
    customer.person_type = customerType;

    return this.customerRepository.save(customer);
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: { id: id },
      relations: ['person_type'],
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
    const customerType = await this.personTypeRepository.findOneBy({
      id: data.person_type_id,
    });
    if (!customerType) {
      throw new NotFoundException(
        `CustomerType id:${data.person_type_id} not found`,
      );
    }

    const updateCustomer = plainToClass(Customer, data);
    updateCustomer.person_type = customerType;
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
