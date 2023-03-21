import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateWarehoseLocationeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'Max length 30' })
  readonly alias: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'Max length 20' })
  readonly floor: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'Max length 20' })
  readonly aisle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'Max length 20' })
  readonly rack: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'Max length 20' })
  readonly level: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: 'Max length 20' })
  readonly bin: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly is_default: boolean;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly warehouse_id: number;
}
