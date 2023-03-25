import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Warehouse } from '../entities/warehouse.entity';
import { CreateWarehouseDto } from '../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../dto/update-warehouse.dto';
import { Repository } from 'typeorm';
import { OfficesService } from 'src/offices/offices.service';
import { WarehouseTypeService } from './warehouse-type.service';
import { plainToClass } from 'class-transformer';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
    private readonly officeService: OfficesService,
    private readonly warehouseTypeService: WarehouseTypeService) {}

  async create(data: CreateWarehouseDto) {
    const warehouseType = await this.warehouseTypeService.findOne(data.warehouse_type_id);
    const warehouseOffice = await this.officeService.findOne(data.office_id);

    const warehose = plainToClass(Warehouse, data);
    warehose.office = warehouseOffice;
    warehose.warehouse_type = warehouseType;
    return this.warehouseRepository.save(warehose);
  }

  findAll() {
    return this.warehouseRepository.find();
  }

  findOne(id: number) {
    const warehouse = this.warehouseRepository.findOneBy({ id: id});
    if (!warehouse) {
      throw new NotFoundException(`Warehouse id:${id} not found`);
    }
    return warehouse;
  }

  async update(id: number, data: UpdateWarehouseDto) {
    const warehouse = await this.warehouseRepository.findOneBy({id: id});
    if (!warehouse) {
      throw new NotFoundException(`Warehouse id: ${id} not found`);
    }
    this.warehouseRepository.merge(warehouse, data);
    return this.warehouseRepository.save(warehouse);
  }

  remove(id: number) {
    const warehouse = this.warehouseRepository.findOneBy({id: id});
    if (!warehouse) {
      throw new NotFoundException(`Warehouse id: ${id} not found`);
    }
    return this.warehouseRepository.softDelete(id);
  }
}
