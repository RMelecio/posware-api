import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateParameterDto } from '../dto/update-parameter.dto';
import { Parameter } from '../entities/parameter.entity';

@Injectable()
export class ParametersService {
  constructor(
    @InjectRepository(Parameter)
    private readonly parameterRepository: Repository<Parameter>,
  ) {}
  async findAll() {
    return this.parameterRepository.find();
  }

  async findOne(id: number) {
    const parameter = await this.parameterRepository.findOneBy({ id: id });
    if (!parameter) {
      throw new NotFoundException(`Parameter id:${id} not found`);
    }

    return parameter;
  }

  async update(id: number, data: UpdateParameterDto) {
    const parameter = await this.parameterRepository.findOneBy({ id: id });
    if (!parameter) {
      throw new NotFoundException(`Parameter id:${id} not found`);
    }

    this.parameterRepository.merge(parameter, data);
  }
}
