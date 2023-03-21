import { PartialType } from '@nestjs/swagger';
import { CreateWarehoseLocationeDto } from './create-warehouse-location.dto';

export class UpdateWarehouseLocationDto extends PartialType(CreateWarehoseLocationeDto) {}
