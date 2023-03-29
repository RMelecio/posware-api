import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';
import { LengthUnit } from '../entities/length-unit.entity';
import { MeasurementUnit } from '../entities/measurement-unit.entity';
import { ProductStatus } from '../entities/product-status.entity';
import { ProductType } from '../entities/product-type.entity';
import { Product } from '../entities/product.entity';
import { VolumeUnit } from '../entities/volume-unit.entity';
import { WeightUnit } from '../entities/weight-unit.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(ProductStatus)
    private readonly producrStatusRepository: Repository<ProductStatus>,
    @InjectRepository(MeasurementUnit)
    private readonly measurementRepository: Repository<MeasurementUnit>,
    @InjectRepository(ProductType)
    private readonly productTypeRepository: Repository<ProductType>,
    @InjectRepository(WeightUnit)
    private readonly weightUnitRepository: Repository<WeightUnit>,
    @InjectRepository(VolumeUnit)
    private readonly volumeUnitRepository: Repository<VolumeUnit>,
    @InjectRepository(LengthUnit)
    private readonly lengthUnitRepository: Repository<LengthUnit>,
  ) {}
  async create(data: CreateProductDto) {
    const newProduct = await this.getDataRelations(data);
    return this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id: id },
      relations: [
        'brand',
        'category',
        'status',
        'measurement_unit',
        'product_type',
        'weight_unit',
        'volumen_unit',
        'length_unit',
      ],
    });
    if (!product) {
      throw new NotFoundException(`Product id:${id} not found`);
    }
    return product;
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product id:${id} not found`);
    }

    const newProductData = await this.getDataRelations(data);
    this.productRepository.merge(product, newProductData);
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product id:${id} not found`);
    }
    return this.productRepository.softDelete(id);
  }

  async getDataRelations(
    data: CreateProductDto | UpdateProductDto,
  ): Promise<Product> {
    const newProduct = plainToClass(Product, data);
    const brand = await this.brandRepository.findOneBy({ id: data.brand_id });
    if (!brand) {
      throw new NotFoundException(`Brand id:${data.brand_id} not found`);
    }
    newProduct.brand = brand;

    const category = await this.categoryRepository.findOneBy({
      id: data.category_id,
    });
    if (!category) {
      throw new NotFoundException(`Category id:${data.category_id} not found`);
    }
    newProduct.category = category;

    const status = await this.producrStatusRepository.findOneBy({
      id: data.status_id,
    });
    if (!status) {
      throw new NotFoundException(`Status id:${data.status_id} not found`);
    }
    newProduct.status = status;

    const measurement = await this.measurementRepository.findOneBy({
      id: data.measurement_unit_id,
    });
    if (!measurement) {
      throw new NotFoundException(
        `Measurement unit id:${data.measurement_unit_id} not found`,
      );
    }
    newProduct.measurement_unit = measurement;

    const productType = await this.productTypeRepository.findOneBy({
      id: data.product_type_id,
    });
    if (!productType) {
      throw new NotFoundException(
        `Product type unit id:${data.product_type_id} not found`,
      );
    }
    newProduct.product_type = productType;

    if (data.weight_unit_id) {
      const WeightUnit = await this.weightUnitRepository.findOneBy({
        id: data.weight_unit_id,
      });
      if (!WeightUnit) {
        throw new NotFoundException(
          `Weight unit id:${data.weight_unit_id} not found`,
        );
      }
      newProduct.weight_unit = WeightUnit;
    }

    if (data.volumen_unit_id) {
      const volumeUnit = await this.volumeUnitRepository.findOneBy({
        id: data.volumen_unit_id,
      });
      if (!volumeUnit) {
        throw new NotFoundException(
          `Volume unit id:${data.volumen_unit_id} not found`,
        );
      }
      newProduct.volumen_unit = volumeUnit;
    }

    if (data.length_unit_id) {
      const lengthUnit = await this.lengthUnitRepository.findOneBy({
        id: data.length_unit_id,
      });
      if (!lengthUnit) {
        throw new NotFoundException(
          `Length unit id:${data.length_unit_id} not found`,
        );
      }
      newProduct.volumen_unit = lengthUnit;
    }

    return newProduct;
  }
}
