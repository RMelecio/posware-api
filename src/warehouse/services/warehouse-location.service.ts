import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

import { UpdateWarehouseLocationDto } from '../dto/update-warehouse-location.dto';
import { WarehouseLocation } from '../entities/warehouse-location.entity';
import { WarehouseService } from './warehouse.service';

@Injectable()
export class WarehouseLocationService {
  constructor(
    @InjectRepository(WarehouseLocation)
    private warehouseLocationRepository: Repository<WarehouseLocation>,
    private readonly warehouseService: WarehouseService,
  ) {}

  async create(data: UpdateWarehouseLocationDto) {
    const newLocation = this.warehouseLocationRepository.create(data);
    const toHash = `${data.warehouse_id}${data.floor}${data.aisle}${data.rack}${data.level}${data.bin}`;
    const hash = crypto.createHash('sha256');
    hash.update(toHash);
    newLocation.hash = hash.digest('hex');

    if (await this.findByHash(newLocation.hash)) {
      throw new BadRequestException(`The location already exists!`);
    }

    return this.warehouseLocationRepository.save(newLocation);
  }

  findAll() {
    return this.warehouseLocationRepository.find();
  }

  async findOne(id: number) {
    const location = await this.warehouseLocationRepository.findOneBy({
      id: id,
    });
    if (!location) {
      throw new NotFoundException(`Location id: ${id} not found`);
    }

    return location;
  }

  async update(id: number, data: UpdateWarehouseLocationDto) {
    const location = await this.warehouseLocationRepository.findOneBy({
      id: id,
    });
    if (!location) {
      throw new NotFoundException(`Location id: ${id} not found`);
    }

    this.warehouseLocationRepository.merge(location, data);
    return this.warehouseLocationRepository.save(location);
  }

  async remove(id: number) {
    const location = await this.warehouseLocationRepository.findOneBy({
      id: id,
    });
    if (!location) {
      throw new NotFoundException(`Local id: ${id} not found`);
    }
    return this.warehouseLocationRepository.softDelete(id);
  }

  async findByHash(data: string) {
    const hash = await this.warehouseLocationRepository.findOneBy({
      hash: data,
    });
    return hash ? true : false;
  }

  async findByWarehouse(warehouseId: number) {
    const warehouse = await this.warehouseService.findOne(warehouseId);
    return await this.warehouseLocationRepository.find({
      where: { warehouse: { id: warehouse.id } },
    });
  }
}
