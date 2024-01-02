import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryOrdersService } from './delivery-orders.service';
import { CreateDeliveryOrderDto } from './dto/create-delivery-order.dto';
import { UpdateDeliveryOrderDto } from './dto/update-delivery-order.dto';

@Controller('delivery-orders')
export class DeliveryOrdersController {
  constructor(private readonly deliveryOrdersService: DeliveryOrdersService) {}

  @Post('activateTrip')
  activateTrip(@Body() createDeliveryOrderDto: any) {
    return this.deliveryOrdersService.activateTrip();
  }

  @Post('cancelTrip')
  cancelTrip(@Body() createDeliveryOrderDto: any) {
    return this.deliveryOrdersService.cancelTrip();
  }

  @Post()
  create(@Body() createDeliveryOrderDto: CreateDeliveryOrderDto) {
    return this.deliveryOrdersService.create(createDeliveryOrderDto);
  }

  @Get()
  findAll() {
    return this.deliveryOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryOrdersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryOrderDto: UpdateDeliveryOrderDto,
  ) {
    return this.deliveryOrdersService.update(id, updateDeliveryOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryOrdersService.remove(id);
  }
}
