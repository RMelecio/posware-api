import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Provider } from './entities/provider.entity';
import { PersonType } from 'src/common/entities/person-types.entity';
import { ProviderContactAddress } from './entities/provider-contact-address.entity';
import { ProvidersService } from './services/providers.service';
import { ProvidersController } from './controllers/providers.controller';
import { ProviderContactAddressesController } from './controllers/provider-contact-addresses.controller';
import { ProviderContactAddressesService } from './services/provider-contact-addresses.service';
import { ContactAddressType } from 'src/common/entities/contact-address-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provider, PersonType, ProviderContactAddress, ContactAddressType])],
  controllers: [ProvidersController, ProviderContactAddressesController],
  providers: [ProvidersService, ProviderContactAddressesService]
})
export class ProvidersModule {}
