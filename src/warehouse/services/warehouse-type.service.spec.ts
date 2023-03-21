import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseTypeService } from './warehouse-type.service';

describe('WarehouseTypeService', () => {
  let service: WarehouseTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseTypeService],
    }).compile();

    service = module.get<WarehouseTypeService>(WarehouseTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
