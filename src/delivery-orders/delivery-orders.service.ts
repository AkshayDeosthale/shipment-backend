import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Delivery } from 'src/schemas/delivery.schema';
import { CreateDeliveryOrderDto } from './dto/create-delivery-order.dto';
import { UpdateDeliveryOrderDto } from './dto/update-delivery-order.dto';

import axios from 'axios';

@Injectable()
export class DeliveryOrdersService {
  constructor(
    @InjectModel('delivery')
    private DELIVERY: Model<Delivery>,
  ) {}

  calculateDistance(
    origin: string,
    stop_location: string[],
    destination: string,
  ): number {
    const earthRadius = 6371; // in kilometers
    const toRadians = (degrees: number) => {
      return degrees * (Math.PI / 180);
    };

    const calculateDistanceLocal = (start: string, end: string) => {
      const [lat1, lon1] = start.split(',');
      const [lat2, lon2] = end.split(',');

      const dLat = toRadians(parseFloat(lat2) - parseFloat(lat1));
      const dLon = toRadians(parseFloat(lon2) - parseFloat(lon1));

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(parseFloat(lat1))) *
          Math.cos(toRadians(parseFloat(lat2))) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c;

      return distance;
    };

    const distance = calculateDistanceLocal(origin, destination);

    // const params = {
    //   key: process.env.GOOGLE_MAP_API,
    //   origins: origin,
    //   destinations: destination,
    //   waypoints: stop_location.join('|'),
    // };

    // axios
    //   .get('https://maps.googleapis.com/maps/api/distancematrix/json', {
    //     params,
    //   })
    //   .then((response) => {
    //     distance = 0;
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return distance;
  }

  async create(createDeliveryOrderDto: CreateDeliveryOrderDto) {
    const distance = this.calculateDistance(
      createDeliveryOrderDto.start_location,
      createDeliveryOrderDto.stop_location,
      createDeliveryOrderDto.end_location,
    );
    const tenp = {
      ...createDeliveryOrderDto,
      deliveryCost: distance * 10,
      distance,
    };
    const newDelivery = await new this.DELIVERY(tenp);
    newDelivery.save();
    return newDelivery;
  }

  findAll() {
    return this.DELIVERY.find({});
  }

  findOne(id: string) {
    return this.DELIVERY.findById(id);
  }

  update(id: string, updateDeliveryOrderDto: UpdateDeliveryOrderDto) {
    return `This action updates a #${id} deliveryOrder`;
  }

  remove(id: string) {
    return this.DELIVERY.findByIdAndDelete(id);
  }
}
