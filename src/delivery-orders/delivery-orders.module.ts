import { Module } from '@nestjs/common';
import { DeliveryOrdersService } from './delivery-orders.service';
import { DeliveryOrdersController } from './delivery-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliverySchema } from 'src/schemas/delivery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'delivery', schema: DeliverySchema }]),
  ],
  controllers: [DeliveryOrdersController],
  providers: [DeliveryOrdersService],
})
export class DeliveryOrdersModule {}
