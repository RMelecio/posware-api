import { PartialType } from '@nestjs/swagger';
import { CreateWarehouseTypeDto } from '../dto/create-warehouse-type.dto';

export class UpdateWarehouseTypeDto extends PartialType(CreateWarehouseTypeDto) {}
