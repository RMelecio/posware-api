import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseTypeController } from './warehouse-type.controller';

describe('WarehouseTypeController', () => {
  let controller: WarehouseTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseTypeController],
    }).compile();

    controller = module.get<WarehouseTypeController>(WarehouseTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
