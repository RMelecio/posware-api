import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProviderContactAddressDto } from '../dto/create-provider-contact-address.dto';
import { UpdateProviderContactAddressDto } from '../dto/update-provider-contact-address.dto';
import { ProviderContactAddress } from '../entities/provider-contact-address.entity';
import { Provider } from '../entities/provider.entity';
import { plainToClass } from 'class-transformer';
import { ContactAddressType } from 'src/common/entities/contact-address-types.entity';

@Injectable()
export class ProviderContactAddressesService {
  constructor(
    @InjectRepository(ProviderContactAddress) private readonly providerContactAddressRepository: Repository<ProviderContactAddress>,
    @InjectRepository(Provider) private readonly providerRepository: Repository<Provider>,
    @InjectRepository(ContactAddressType) private readonly contactAddressTypeRepository: Repository<ContactAddressType>,
  ) {}

  async create(data: CreateProviderContactAddressDto) {
    const provider = await this.providerRepository.findOneBy({ id: data.provider_id });
    const contactType = await this.contactAddressTypeRepository.findOneBy({ id: data.contact_address_type_id});
    if (!provider) {
      throw new NotFoundException(`Provider id:${data.provider_id} not found`);
    }
    if (!contactType) {
      throw new NotFoundException(`Contact Address Type id:${data.contact_address_type_id} not found`);
    }
    
    const newContact = plainToClass(ProviderContactAddress, data);
    newContact.contact_address_type = contactType;
    newContact.provider = provider;
    
    return await this.providerContactAddressRepository.save(newContact);
  }

  async findAll() {
    return await this.providerContactAddressRepository.find();
  }

  async findOne(id: number) {
    const contact = await this.providerContactAddressRepository.findOne({
      where:{ id: id },
      relations: ['contact_address_type'],
    });
    if (!contact) {
      throw new NotFoundException(`Provider contact address id:${id} not found`);
    }
    return contact;
  }

  async update(id: number, data: UpdateProviderContactAddressDto) {
    const provider = await this.providerRepository.findOneBy({ id: data.provider_id });
    const contactType = await this.contactAddressTypeRepository.findOneBy({ id: data.contact_address_type_id});
    const contact = await this.providerContactAddressRepository.findOneBy({ id: id });
    if (!contact) {
      throw new NotFoundException(`Provider contact address id:${id} not found`);
    }
    if (!provider) {
      throw new NotFoundException(`Provider id:${data.provider_id} not found`);
    }
    if (!contactType) {
      throw new NotFoundException(`Contact Address id:${data.contact_address_type_id} not found`);
    }

    const updateData = plainToClass(ProviderContactAddress, data);
    updateData.provider = provider;
    updateData.contact_address_type = contactType;
    this.contactAddressTypeRepository.merge(contact, updateData);
    return await this.providerContactAddressRepository.save(contact);
  }

  async remove(id: number) {
    const contact = await this.providerContactAddressRepository.findOneBy({ id: id });
    if (!contact) {
      throw new NotFoundException(`Provider contact address id:${id} not found`);
    }
    return await this.providerContactAddressRepository.softDelete(id);
  }
}