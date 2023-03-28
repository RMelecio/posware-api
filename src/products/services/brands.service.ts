import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateBrandDto } from '../dto/create-brand.dto';
import { UpdateBrandDto } from '../dto/update-brand.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}
  async create(data: CreateBrandDto) {
    const newBrand = plainToClass(Brand, data);
    const slug = data.name.toLowerCase();
    newBrand.slug = slug.replace(/\s+/g, '-');
    return await this.brandRepository.save(newBrand);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    const brand = await this.brandRepository.findOneBy({ id: id });
    if (!brand) {
      throw new NotFoundException(`Brand id:${id} not found`);
    }
    return brand;
  }

  async update(id: number, data: UpdateBrandDto) {
    const brand = await this.brandRepository.findOneBy({ id: id });
    if (!brand) {
      throw new NotFoundException(`Brand id:${id} not found`);
    }

    const newData = plainToClass(Brand, data);
    const slug = data.name.toLowerCase();
    newData.slug = slug.replace(/\s+/g, '-');
    this.brandRepository.merge(brand, newData);
    return await this.brandRepository.save(brand);
  }

  async remove(id: number) {
    const brand = await this.brandRepository.findOneBy({ id: id });
    if (!brand) {
      throw new NotFoundException(`Brand id:${id} not found`);
    }
    return await this.brandRepository.softDelete(id);
  }
}
