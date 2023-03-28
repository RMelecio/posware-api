import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParameterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  selected_value: string;
}
