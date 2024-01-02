import { Module } from '@nestjs/common';
import { VehicleLocationService } from './vehicle-location.service';
import { VehicleLocationGateway } from './vehicle-location.gateway';

@Module({
  providers: [VehicleLocationGateway, VehicleLocationService],
})
export class VehicleLocationModule {}
