import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMeasurementUnitDto } from '../dto/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from '../dto/update-measurement-unit.dto';
import { MeasurementUnit } from '../entities/measurement-unit.entity';

@Injectable()
export class MeasurementUnitsService {
  constructor(
    @InjectRepository(MeasurementUnit)
    private readonly measurementUnitRepository: Repository<MeasurementUnit>,
  ) {}
  async create(data: CreateMeasurementUnitDto) {
    return await this.measurementUnitRepository.save(data);
  }

  async findAll() {
    return await this.measurementUnitRepository.find();
  }

  async findOne(id: number) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Measurement of unit id:${id} not found`);
    }
    return unit;
  }

  async update(id: number, data: UpdateMeasurementUnitDto) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Measurement of unit id:${id} not found`);
    }

    this.measurementUnitRepository.merge(unit, data);
    return await this.measurementUnitRepository.save(unit);
  }

  async remove(id: number) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Measurement of unit id:${id} not found`);
    }
    return await this.measurementUnitRepository.softDelete(id);
  }
}
