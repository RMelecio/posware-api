import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { UpdateCustomerContactAddressDto } from "src/customers/dto/update-customer-contact-address.dto";
import { CreateProviderContactAddressDto } from "../dto/create-provider-contact-address.dto";
import { ProviderContactAddressesService } from "../services/provider-contact-addresses.service";

@ApiTags('Provider Addresses')
@UseGuards(JwtAuthGuard)
@Controller('provider-addresses')
export class ProviderContactAddressesController {
  constructor(private readonly providerContactAddressesService: ProviderContactAddressesService) {}

  @Post()
  create(@Body() createProviderContactAddressDto: CreateProviderContactAddressDto) {
    return this.providerContactAddressesService.create(createProviderContactAddressDto);
  }

  @Get()
  findAll() {
    return this.providerContactAddressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.providerContactAddressesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProviderContactAddressDto: UpdateCustomerContactAddressDto) {
    return this.providerContactAddressesService.update(id, updateProviderContactAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.providerContactAddressesService.remove(id);
  }

  @Get('provider/:id')
  findByProvider(@Param('id') id: number) {
    return this.providerContactAddressesService.findByProvider(id);
  }
}