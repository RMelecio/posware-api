import { Module } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { OfficesController } from './offices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from './entities/office.entity';
import { OfficeType } from './entities/office-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Office, OfficeType])],
  controllers: [OfficesController],
  providers: [OfficesService],
  exports: [OfficesService],
})
export class OfficesModule {}
