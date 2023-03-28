import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUnitMeasurementDto } from '../dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from '../dto/update-unit-measurement.dto';
import { UnitMeasurement } from '../entities/unit-measurement.entity';

@Injectable()
export class UnitMeasurementsService {
  constructor(@InjectRepository(UnitMeasurement) private readonly unitMeasurementRepository: Repository<UnitMeasurement>) {}
  async create(data: CreateUnitMeasurementDto) {
    return await this.unitMeasurementRepository.save(data);
  }

  async findAll() {
    return await this.unitMeasurementRepository.find();
  }

  async findOne(id: number) {
    const unit = await this.unitMeasurementRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit measurement id:${id} not found`);
    }
    return unit;
  }

  async update(id: number, data: UpdateUnitMeasurementDto) {
    const unit = await this.unitMeasurementRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit measurement id:${id} not found`);
    }

    this.unitMeasurementRepository.merge(unit, data);
    return await this.unitMeasurementRepository.save(unit);
  }

  async remove(id: number) {
    const unit = await this.unitMeasurementRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Unit Measurement id:${id} not found`);
    }
    return await this.unitMeasurementRepository.softDelete(id);
  }
}
