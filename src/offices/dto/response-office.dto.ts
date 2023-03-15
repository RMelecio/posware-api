import { Exclude } from 'class-transformer';
import { ResponseOfficeType } from './reponse-officeType';

export class TestOfficeDto {
  alias: string;
  name: string;
  office_type: ResponseOfficeType;
  address: string;
  settlement: string;
  location: string;
  postal_code: string;
  city: string;
  state: string;
  country: string;
  mobil: string;
  email: string;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  @Exclude()
  deleted_at: Date;
}
