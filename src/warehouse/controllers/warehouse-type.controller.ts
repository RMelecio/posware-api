import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { CreateWarehouseTypeDto } from '../dto/create-warehouse-type.dto';
import { UpdateWarehouseTypeDto } from '../dto/update-warehouse-type.dto';
import { WarehouseTypeService } from '../services/warehouse-type.service';

@ApiTags('Warehouse Types')
@UseGuards(JwtAuthGuard)
@Controller('warehouse-type')
export class WarehouseTypeController {
  constructor(private readonly warehouseTypeService: WarehouseTypeService) {}

  @Post()
  create(@Body() createWarehouseTypeDto: CreateWarehouseTypeDto) {
    return this.warehouseTypeService.create(createWarehouseTypeDto);
  }

  @Get()
  findAll() {
    return this.warehouseTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarehouseTypeDto: UpdateWarehouseTypeDto) {
    return this.warehouseTypeService.update(+id, updateWarehouseTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseTypeService.remove(+id);
  }
}
