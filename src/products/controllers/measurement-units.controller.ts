import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { CreateUnitMeasurementDto } from '../dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from '../dto/update-unit-measurement.dto';
import { MeasurementUnitsService } from '../services/measurement-units.service';

@ApiTags('Unit Measurements')
@UseGuards(JwtAuthGuard)
@Controller('unit-measurements')
export class MeasurementUnitsController {
  constructor(
    private readonly measurementUnitsService: MeasurementUnitsService,
  ) {}

  @Post()
  create(@Body() createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return this.measurementUnitsService.create(createUnitMeasurementDto);
  }

  @Get()
  findAll() {
    return this.measurementUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnitMeasurementDto: UpdateUnitMeasurementDto,
  ) {
    return this.measurementUnitsService.update(+id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementUnitsService.remove(+id);
  }
}
