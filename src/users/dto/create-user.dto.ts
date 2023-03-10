import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'user to logging' })
  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly middle_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly mobil: string;
}
