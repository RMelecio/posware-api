import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { WarehouseType } from '../entities/warehouse-type.entity';
import { CreateWarehouseTypeDto } from '../dto/create-warehouse-type.dto';
import { UpdateWarehouseTypeDto } from '../dto/update-warehouse-type.dto';

@Injectable()
export class WarehouseTypeService {
  constructor(@InjectRepository(WarehouseType) 
    private readonly warehoseTypeRepository: Repository<WarehouseType>
  ) {}

  create(data: CreateWarehouseTypeDto) {
    return this.warehoseTypeRepository.save(data);
  }

  findAll() {
    return this.warehoseTypeRepository.find();
  }

  async findOne(id: number) {
    const warehouseType = await this.warehoseTypeRepository.findOneBy({ id: id });
    if (!warehouseType) {
      throw new NotFoundException(`Warehouse Type id: ${id} not found`);
    }
    return warehouseType;
  }

  async update(id: number, data: UpdateWarehouseTypeDto) {
    const warehouseType = await this.warehoseTypeRepository.findOneBy({ id: id});
    if (!warehouseType) {
      throw new NotFoundException(`Warehouse Type id: ${id} not found`);
    }
    this.warehoseTypeRepository.merge(warehouseType, data);
    const updateWarehouseType = this.warehoseTypeRepository.save(warehouseType);
    return updateWarehouseType;
  }

  async remove(id: number) {
    const warehouseType = await this.warehoseTypeRepository.findOneBy({ id: id });
    if (!warehouseType) {
      throw new NotFoundException(`Warehouse Type id: ${id} not found`);
    }
    return this.warehoseTypeRepository.softDelete(id);
  }
}
