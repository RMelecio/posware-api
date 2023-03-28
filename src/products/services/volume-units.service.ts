import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateVolumeUnitDto } from '../dto/create-volume-unit.dto';
import { UpdateVolumeUnitDto } from '../dto/update-volume-unit.dto';
import { VolumeUnit } from '../entities/volume-unit.entity';

@Injectable()
export class VolumeUnitsService {
  constructor(
    @InjectRepository(VolumeUnit)
    private readonly volumeUnitRepository: Repository<VolumeUnit>,
  ) {}
  async create(data: CreateVolumeUnitDto) {
    return await this.volumeUnitRepository.save(data);
  }

  async findAll() {
    return await this.volumeUnitRepository.find();
  }

  async findOne(id: number) {
    const unit = await this.volumeUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }
    return unit;
  }

  async update(id: number, data: UpdateVolumeUnitDto) {
    const unit = await this.volumeUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }

    this.volumeUnitRepository.merge(unit, data);
    return await this.volumeUnitRepository.save(unit);
  }

  async remove(id: number) {
    const unit = await this.volumeUnitRepository.findOneBy({ id: id });
    if (!unit) {
      throw new NotFoundException(`Weight unit id:${id} not found`);
    }
    return await this.volumeUnitRepository.softDelete(id);
  }
}
