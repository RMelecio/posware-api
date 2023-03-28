import { PartialType } from '@nestjs/mapped-types';
import { CreateVolumeUnitDto } from './create-volume-unit.dto';

export class UpdateVolumeUnitDto extends PartialType(CreateVolumeUnitDto) {}
