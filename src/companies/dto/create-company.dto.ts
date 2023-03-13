import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly alias: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly trade_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly rfc: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly fiscal_regime: string;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly settlement: string;

  @ApiProperty()
  @IsString()
  readonly location: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly postal_code: string;

  @ApiProperty()
  @IsString()
  readonly city: string;

  @ApiProperty()
  @IsString()
  readonly state: string;

  @ApiProperty()
  @IsString()
  readonly country: string;

  @ApiProperty()
  @IsString()
  readonly mobil: string;

  @ApiProperty()
  @IsString()
  readonly email: string;
}
