import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { Office } from './entities/office.entity';
import { OfficeType } from './entities/office-type.entity';

@Injectable()
export class OfficesService {
  constructor(
    @InjectRepository(Office)
    private readonly officeRepository: Repository<Office>,
    @InjectRepository(OfficeType)
    private readonly officeTypeRepository: Repository<OfficeType>,
  ) {}

  async create(data: CreateOfficeDto) {
    const officeType = await this.officeTypeRepository.findOneBy({
      id: data.office_type_id,
    });
    if (!officeType) {
      throw new NotFoundException(
        `office type id: ${data.office_type_id} not found`,
      );
    }
    delete data.office_type_id;
    const office = plainToClass(Office, data);
    office.office_type = officeType;
    return this.officeRepository.save(office);
  }

  findAll() {
    return this.officeRepository.find({});
  }

  async findOne(id: number) {
    const officeFound = await this.officeRepository.findOne({
      where: { id: id },
      relations: ['office_type'],
    });
    if (!officeFound) {
      throw new NotFoundException(`office id:${id} not found`);
    }

    //const office = plainToClass(TestOfficeDto, officeFound);
    //return office;
    return officeFound;
  }

  async update(id: number, data: UpdateOfficeDto) {
    const officeToUpdate = await this.officeRepository.findOneBy({ id: id });
    if (!officeToUpdate) {
      throw new NotFoundException(`office id:${id} not found`);
    }
    const officeType = await this.officeTypeRepository.findOneBy({
      id: data.office_type_id,
    });
    if (!officeType) {
      throw new NotFoundException(
        `office type id: ${data.office_type_id} not found`,
      );
    }
    console.log(officeType);
    delete data.office_type_id;
    const officeData = plainToClass(Office, data);
    officeData.office_type = officeType;
    this.officeRepository.merge(officeToUpdate, officeData);
    return this.officeRepository.save(officeToUpdate);
  }

  async remove(id: number) {
    const office = await this.officeRepository.findOneBy({ id: id });
    if (!office) {
      throw new NotFoundException(`office id:${id} not found`);
    }
    return this.officeRepository.softDelete(id);
  }
}
