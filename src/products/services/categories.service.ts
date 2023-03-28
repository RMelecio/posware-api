import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(data: CreateCategoryDto) {
    let parentCategory = null;
    if (data.parent_category_id) {
      parentCategory = await this.categoryRepository.findOneBy({
        id: data.parent_category_id,
      });
      if (!parentCategory) {
        throw new NotFoundException(
          `Category parent id:${data.parent_category_id} not found`,
        );
      }
    }

    const newCategory = plainToClass(Category, data);
    newCategory.parent_category = parentCategory;
    const slug = newCategory.name.toLowerCase();
    newCategory.slug = slug.replace(/\s+/g, '-');
    return await this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.find({
      where: { id: id },
      //relations: ['category_parent']
    });
    if (!category) {
      throw new NotFoundException(`Category id:${id} not found`);
    }
    return category;
  }

  async update(id: number, data: UpdateCategoryDto) {
    let parentCategory = null;
    const category = await this.categoryRepository.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException(`Category id:${id} not found`);
    }

    if (data.parent_category_id) {
      parentCategory = await this.categoryRepository.findOneBy({
        id: data.parent_category_id,
      });
      if (!parentCategory) {
        throw new NotFoundException(
          `Category parent id:${data.parent_category_id} not found`,
        );
      }
    }

    const dataUpdate = plainToClass(Category, data);
    dataUpdate.parent_category = parentCategory;
    const slug = dataUpdate.name.toLowerCase();
    dataUpdate.slug = slug.replace(/\s+/g, '-');
    this.categoryRepository.merge(category, dataUpdate);
    return this.categoryRepository.save(category);
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException(`Category id:${id} not found`);
    }
    return await this.categoryRepository.softDelete(id);
  }
}
