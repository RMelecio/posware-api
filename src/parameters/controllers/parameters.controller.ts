import { Controller, Get, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ParametersService } from '../services/parameters.service';
import { UpdateParameterDto } from '../dto/update-parameter.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Parameters')
@UseGuards(JwtAuthGuard)
@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Get()
  findAll() {
    return this.parametersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParameterDto: UpdateParameterDto,
  ) {
    return this.parametersService.update(+id, updateParameterDto);
  }
}
