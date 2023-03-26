import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductsService, BrandsService, CategoriesService]
})
export class ProductsModule {}