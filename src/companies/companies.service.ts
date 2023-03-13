import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}
  async findOne(id: number) {
    const company = await this.companyRepository.findOneBy({ id: id });
    if (!company) {
      throw new NotFoundException(`Company id: ${id} not found`);
    }
    return company;
  }

  async update(id: number, data: UpdateCompanyDto) {
    const company = await this.companyRepository.findOneBy({ id: id });
    if (!company) {
      throw new NotFoundException(`Company id: ${id} not found`);
    }
    this.companyRepository.merge(company, data);
    return this.companyRepository.save(company);
  }
}
