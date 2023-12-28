import { Module } from '@nestjs/common';
import { DeliveryPartnersService } from './delivery-partners.service';
import { DeliveryPartnersController } from './delivery-partners.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryPartnerSchema } from 'src/schemas/delivery-partner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'deliverypartners', schema: DeliveryPartnerSchema },
    ]),
  ],
  controllers: [DeliveryPartnersController],
  providers: [DeliveryPartnersService],
})
export class DeliveryPartnersModule {}
