import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { DeliveryPartnersModule } from './delivery-partners/delivery-partners.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryOrdersModule } from './delivery-orders/delivery-orders.module';
import { ConfigModule } from '@nestjs/config';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehicleLocationModule } from './vehicle-location/vehicle-location.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mini-Porter'),
    UsersModule,
    EnterpriseModule,
    DeliveryPartnersModule,
    DeliveryOrdersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    VehiclesModule,
    VehicleLocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
