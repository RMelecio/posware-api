import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateWarehouseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)  
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  warehouse_type_id: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  office_id: number;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;
}
