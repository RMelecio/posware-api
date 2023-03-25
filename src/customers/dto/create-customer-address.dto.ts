import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCustomerAddressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  customer_id: number;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  settlement: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  @MaxLength(5)
  postal_code: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsBoolean()
  is_billing: boolean;

  @ApiProperty()
  @IsBoolean()
  is_delivery: boolean;

  @ApiProperty()
  @IsString()
  reference: string;

  @ApiProperty()
  @IsString()
  person_receives_name: string;

  @ApiProperty()
  @IsString()
  person_receives_mobil: string;

  @ApiProperty()
  @IsString()
  person_receives_email: string;
}
