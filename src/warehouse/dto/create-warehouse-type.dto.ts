import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateWarehouseTypeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'Max length 30' })  
  readonly name: string
}
