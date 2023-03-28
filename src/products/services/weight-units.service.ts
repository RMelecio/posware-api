import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateWeightUnitDto } from '../dto/create-weight-unit.dto';
import { UpdateWeightUnitDto } from '../dto/update-weight-unit.dto';
import { WeightUnit } from '../entities/weight-unit.entity';

@Injectable()
export class WeightUnitsService {
  constructor(
    @InjectRepository(WeightUnit)
    private readonly weightUnitRepository: Repository<WeightUnit>,
  ) {}
  async create(data: CreateWeightUnitDto) {
    return await this.weightUnitRepository.save(data);
  }

  async findAll() {
    return await this.weightUnitRepository.find();
  }

  async findOne(id: number) {
    const unit = await this.weightUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }
    return unit;
  }

  async update(id: number, data: UpdateWeightUnitDto) {
    const unit = await this.weightUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }

    this.weightUnitRepository.merge(unit, data);
    return await this.weightUnitRepository.save(unit);
  }

  async remove(id: number) {
    const unit = await this.weightUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }
    return await this.weightUnitRepository.softDelete(id);
  }
}
