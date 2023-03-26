import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProviderContactAddressDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly provider_id: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly contact_address_type_id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  person_title: string;

  @ApiProperty()
  @IsString()
  mobil: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  job: string;

  @ApiProperty()
  @IsString()
  notes: string;

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
  @IsString()
  reference: string;
}
