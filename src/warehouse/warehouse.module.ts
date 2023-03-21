import { Module } from '@nestjs/common';
import { WarehouseService } from './services/warehouse.service';
import { WarehouseController } from './controllers/warehouse.controller';
import { WarehouseTypeController } from './controllers/warehouse-type.controller';
import { WarehouseTypeService } from './services/warehouse-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseType } from './entities/warehouse-type.entity';
import { LocationController } from './controllers/warehouse-location.controller';
import { WarehouseLocationService } from './services/warehouse-location.service';
import { WarehouseLocation } from './entities/warehouse-location.entity';
import { OfficesService } from '../offices/offices.service';
import { OfficesModule } from 'src/offices/offices.module';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse, WarehouseType, WarehouseLocation]), OfficesModule],
  controllers: [WarehouseController, WarehouseTypeController, LocationController],
  providers: [
    WarehouseService,
    WarehouseTypeService,
    WarehouseLocationService,
    WarehouseTypeService
  ]
})
export class WarehouseModule {}
