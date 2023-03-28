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
import { CreateWeightUnitDto } from '../dto/create-weight-unit.dto';
import { UpdateWeightUnitDto } from '../dto/update-weight-unit.dto';
import { WeightUnitsService } from '../services/weight-units.service';

@ApiTags('Weight Units')
@UseGuards(JwtAuthGuard)
@Controller('weight-units')
export class WeightUnitsController {
  constructor(private readonly weightUnitsService: WeightUnitsService) {}

  @Post()
  create(@Body() createWeightUnitDto: CreateWeightUnitDto) {
    return this.weightUnitsService.create(createWeightUnitDto);
  }

  @Get()
  findAll() {
    return this.weightUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weightUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWeightUnitDto: UpdateWeightUnitDto,
  ) {
    return this.weightUnitsService.update(+id, updateWeightUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weightUnitsService.remove(+id);
  }
}
