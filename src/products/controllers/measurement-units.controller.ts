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
import { CreateMeasurementUnitDto } from '../dto/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from '../dto/update-measurement-unit.dto';
import { MeasurementUnitsService } from '../services/measurement-units.service';

@ApiTags('Measurement Units')
@UseGuards(JwtAuthGuard)
@Controller('measurement-units')
export class MeasurementUnitsController {
  constructor(
    private readonly measurementUnitsService: MeasurementUnitsService,
  ) {}

  @Post()
  create(@Body() createUnitMeasurementDto: CreateMeasurementUnitDto) {
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
    @Body() updateUnitMeasurementDto: UpdateMeasurementUnitDto,
  ) {
    return this.measurementUnitsService.update(+id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementUnitsService.remove(+id);
  }
}
