import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseLocationService } from './warehouse-location.service';

describe('WarehouseLocationService', () => {
  let service: WarehouseLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseLocationService],
    }).compile();

    service = module.get<WarehouseLocationService>(WarehouseLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
