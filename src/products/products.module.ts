import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
import { UnitMeasurement } from './entities/unit-measurement.entity';

import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { UnitMeasurementsService } from './services/unit-measurements.service';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UnitMeasurementsController } from './controllers/unit-measurements.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category, UnitMeasurement])],
  controllers: [ProductsController, BrandsController, CategoriesController, UnitMeasurementsController],
  providers: [ProductsService, BrandsService, CategoriesService, UnitMeasurementsService]
})
export class ProductsModule {}
