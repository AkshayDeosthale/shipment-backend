import { Test, TestingModule } from '@nestjs/testing';
import { VehicleLocationService } from './vehicle-location.service';

describe('VehicleLocationService', () => {
  let service: VehicleLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleLocationService],
    }).compile();

    service = module.get<VehicleLocationService>(VehicleLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
