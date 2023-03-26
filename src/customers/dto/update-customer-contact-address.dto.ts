import { PartialType } from '@nestjs/swagger';
import { CreateCustomerContactAddressDto } from './create-customer-contact-address.dto';

export class UpdateCustomerContactAddressDto extends PartialType(
  CreateCustomerContactAddressDto,
) {}
