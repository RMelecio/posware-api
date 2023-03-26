import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand])],
  controllers: [ProductsController, BrandsController],
  providers: [ProductsService, BrandsService]
})
export class ProductsModule {}
