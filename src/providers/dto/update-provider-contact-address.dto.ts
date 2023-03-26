import { PartialType } from '@nestjs/swagger';
import { CreateProviderContactAddressDto } from './create-provider-contact-address.dto';

export class UpdateProviderContactAddressDto extends PartialType(
    CreateProviderContactAddressDto,
) {}
