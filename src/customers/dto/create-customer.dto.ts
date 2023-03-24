import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly alias: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
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
    @IsString()
    readonly customer_type_id: number;

    @ApiProperty()
    @IsString()
    readonly mobil: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    @IsPositive()
    readonly credit_amount: number;

    @ApiProperty()
    @IsPositive()
    readonly credit_days: number;
}
