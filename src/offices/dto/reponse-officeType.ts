import { Exclude } from 'class-transformer';

export class ResponseOfficeType {
  id: number;
  name: string;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  @Exclude()
  deleted_at: Date;
}
