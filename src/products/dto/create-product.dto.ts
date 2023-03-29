import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  brand_id: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  category_id: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  status_id: number;

  @ApiProperty()
  @IsString()
  short_name?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  full_name?: string;

  @ApiProperty()
  @IsString()
  url_imagen?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  upc: string;

  @ApiProperty()
  @IsString()
  part_number?: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  has_serial_number: boolean;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  measurement_unit_id: number;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  has_taxes: boolean;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  product_type_id: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  returnable_days?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  warranty_days?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  default_price: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  default_cost?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  weight_unit_id?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  weight?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  volumen_unit_id?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  volumen?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  length_unit_id?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  length?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  width?: number;

  @ApiProperty()
  @IsNumber()
  @IsBoolean()
  @IsNotEmpty()
  is_purchasable: boolean;

  @ApiProperty()
  @IsString()
  cfdi_prodserv_code?: string;

  @ApiProperty()
  @IsString()
  cfdi_unit_code?: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  max_stock?: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  min_stock?: number;
}
