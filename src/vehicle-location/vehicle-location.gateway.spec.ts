import { Test, TestingModule } from '@nestjs/testing';
import { VehicleLocationGateway } from './vehicle-location.gateway';
import { VehicleLocationService } from './vehicle-location.service';

describe('VehicleLocationGateway', () => {
  let gateway: VehicleLocationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleLocationGateway, VehicleLocationService],
    }).compile();

    gateway = module.get<VehicleLocationGateway>(VehicleLocationGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
