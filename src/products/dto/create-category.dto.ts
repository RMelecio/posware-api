import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly image_url: string;

  @ApiProperty()
  @IsNumber()
  readonly parent_category_id?: number;
  
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly returnable_days: number

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly is_active: boolean;
}