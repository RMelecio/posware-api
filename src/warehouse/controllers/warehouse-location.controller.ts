import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

import { CreateWarehoseLocationeDto } from '../dto/create-warehouse-location.dto';
import { UpdateWarehouseLocationDto } from '../dto/update-warehouse-location.dto';
import { WarehouseLocationService } from '../services/warehouse-location.service';

@ApiTags('Warehose Location')
@UseGuards(JwtAuthGuard)
@Controller('warehouse-location')
export class LocationController {
  constructor(private readonly warehouseLocationService: WarehouseLocationService) {}

  @Post()
  create(@Body() data: CreateWarehoseLocationeDto) {
    return this.warehouseLocationService.create(data);
  }

  @Get()
  findAll() {
    return this.warehouseLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateWarehouseLocationDto) {
    return this.warehouseLocationService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseLocationService.remove(+id);
  }

  @Get('/warehouse/:id')
  findByWarehouse(@Param('id') warehouseId: string) {
    return this.warehouseLocationService.findByWarehouse(+warehouseId);
  }
}
