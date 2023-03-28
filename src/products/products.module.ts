import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
import { MeasurementUnit } from './entities/measurement-unit.entity';
import { WeightUnit } from './entities/weight-unit.entity';

import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { MeasurementUnitsService } from './services/measurement-units.service';
import { WeightUnitsService } from './services/weight-units.service';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { MeasurementUnitsController } from './controllers/measurement-units.controller';
import { WeightUnitsController } from './controllers/weight-units.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Brand,
      Category,
      MeasurementUnit,
      WeightUnit,
    ]),
  ],
  controllers: [
    ProductsController,
    BrandsController,
    CategoriesController,
    MeasurementUnitsController,
    WeightUnitsController,
  ],
  providers: [
    ProductsService,
    BrandsService,
    CategoriesService,
    MeasurementUnitsService,
    WeightUnitsService,
  ],
})
export class ProductsModule {}
