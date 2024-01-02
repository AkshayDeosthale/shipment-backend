import { Module } from '@nestjs/common';
import { DeliveryPartnersService } from './delivery-partners.service';
import { DeliveryPartnersController } from './delivery-partners.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryPartnerSchema } from 'src/schemas/delivery-partner.schema';
import { VehicleSchema } from 'src/schemas/vehicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'deliverypartners', schema: DeliveryPartnerSchema },
      { name: 'deliverypartnersVehicles', schema: VehicleSchema },
    ]),
  ],
  controllers: [DeliveryPartnersController],
  providers: [DeliveryPartnersService],
})
export class DeliveryPartnersModule {}
