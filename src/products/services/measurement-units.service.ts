import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUnitMeasurementDto } from '../dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from '../dto/update-unit-measurement.dto';
import { MeasurementUnit } from '../entities/measurement-unit.entity';

@Injectable()
export class MeasurementUnitsService {
  constructor(
    @InjectRepository(MeasurementUnit)
    private readonly measurementUnitRepository: Repository<MeasurementUnit>,
  ) {}
  async create(data: CreateUnitMeasurementDto) {
    return await this.measurementUnitRepository.save(data);
  }

  async findAll() {
    return await this.measurementUnitRepository.find();
  }

  async findOne(id: number) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit measurement id:${id} not found`);
    }
    return unit;
  }

  async update(id: number, data: UpdateUnitMeasurementDto) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit measurement id:${id} not found`);
    }

    this.measurementUnitRepository.merge(unit, data);
    return await this.measurementUnitRepository.save(unit);
  }

  async remove(id: number) {
    const unit = await this.measurementUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit Measurement id:${id} not found`);
    }
    return await this.measurementUnitRepository.softDelete(id);
  }
}
