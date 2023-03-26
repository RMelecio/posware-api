import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProviderDto } from '../dto/create-provider.dto';
import { UpdateProviderDto } from '../dto/update-provider.dto';
import { PersonType } from 'src/common/entities/person-types.entity';
import { Provider } from '../entities/provider.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProvidersService {
  constructor(@InjectRepository(Provider) private readonly providerRepository: Repository<Provider>,
  @InjectRepository(PersonType) private readonly personTypeRepository: Repository<PersonType>) {}
  async create(data: CreateProviderDto) {
    const personType = await this.personTypeRepository.findOneBy({ id: data.person_type_id});
    if (!personType) {
      throw new NotFoundException(`PersonType id:${data.person_type_id} not found`);
    }
    
    const providerData = plainToClass(Provider, data);
    providerData.person_type = personType;
    return await this.providerRepository.save(providerData);
  }

  async findAll() {
    return await this.providerRepository.find();
  }

  async findOne(id: number) {
    const provider = await this.providerRepository.findOne({
      where:{ id: id },
      relations: ['provider_contact_addresses','provider_contact_addresses.contact_address_type']
    });
    if (!provider) {
      throw new NotFoundException(`Provider id:${id} not found`);
    }
    return provider;
  }

  async update(id: number, data: UpdateProviderDto) {
    const provider = await this.providerRepository.findOneBy({ id: id });
    if (!provider) {
      throw new NotFoundException(`Provider id:${id} not found`);
    }
    const personType = await this.personTypeRepository.findOneBy({ id: data.person_type_id});
    if (!personType) {
      throw new NotFoundException(`PersonType id:${data.person_type_id} not found`);
    }

    const providerData = plainToClass(Provider, data);
    providerData.person_type = personType;
    this.providerRepository.merge(provider, providerData);
    return await this.providerRepository.save(provider);
  }

  async remove(id: number) {
    const provider = await this.providerRepository.findOneBy({ id: id });
    if (!provider) {
      throw new NotFoundException(`Provider id:${id} not found`);
    }
    return this.providerRepository.softDelete(id);
  }
}
