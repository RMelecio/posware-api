import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProviderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly alias: string

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly middle_name: string;

  @ApiProperty()
  @IsString()
  readonly last_name: string;

  @ApiProperty()
  @IsString()
  readonly trade_name: string;

  @ApiProperty()
  @IsString()
  readonly rfc: string;

  @ApiProperty()
  @IsNumber()
  readonly person_type_id: number;

  @ApiProperty()
  @IsString()
  readonly mobil: string;

  @ApiProperty()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly web_site: string;

  @ApiProperty()
  @IsNumber()
  readonly credit_days: number;

  @ApiProperty()
  @IsString()
  readonly payment_conditions: string;
}
