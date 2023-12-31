import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleSchema } from 'src/schemas/vehicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'deliverypartnersVehicles', schema: VehicleSchema },
    ]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
