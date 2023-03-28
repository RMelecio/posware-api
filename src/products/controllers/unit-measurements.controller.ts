import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { CreateUnitMeasurementDto } from '../dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from '../dto/update-unit-measurement.dto';
import { UnitMeasurementsService } from '../services/unit-measurements.service';

@ApiTags('Unit Measurements')
@UseGuards(JwtAuthGuard)
@Controller('unit-measurements')
export class UnitMeasurementsController {
  constructor(private readonly unitMeasurementsService: UnitMeasurementsService) {}

  @Post()
  create(@Body() createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return this.unitMeasurementsService.create(createUnitMeasurementDto);
  }

  @Get()
  findAll() {
    return this.unitMeasurementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitMeasurementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnitMeasurementDto: UpdateUnitMeasurementDto) {
    return this.unitMeasurementsService.update(+id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitMeasurementsService.remove(+id);
  }
}
