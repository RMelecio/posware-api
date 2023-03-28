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
import { CreateVolumeUnitDto } from '../dto/create-volume-unit.dto';
import { UpdateVolumeUnitDto } from '../dto/update-volume-unit.dto';
import { VolumeUnitsService } from '../services/volume-units.service';

@ApiTags('Volume Units')
@UseGuards(JwtAuthGuard)
@Controller('volume-units')
export class VolumeUnitsController {
  constructor(private readonly volumeUnitsService: VolumeUnitsService) {}

  @Post()
  create(@Body() createVolumeUnitDto: CreateVolumeUnitDto) {
    return this.volumeUnitsService.create(createVolumeUnitDto);
  }

  @Get()
  findAll() {
    return this.volumeUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volumeUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVolumeUnitDto: UpdateVolumeUnitDto,
  ) {
    return this.volumeUnitsService.update(+id, updateVolumeUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volumeUnitsService.remove(+id);
  }
}
