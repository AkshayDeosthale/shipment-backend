import { Injectable } from '@nestjs/common';
import { CreateVehicleLocationDto } from './dto/create-vehicle-location.dto';
import { UpdateVehicleLocationDto } from './dto/update-vehicle-location.dto';

@Injectable()
export class VehicleLocationService {
  create(createVehicleLocationDto: CreateVehicleLocationDto) {
    return 'This action adds a new vehicleLocation';
  }

  findAll() {
    return `This action returns all vehicleLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleLocation`;
  }

  update(id: number, updateVehicleLocationDto: UpdateVehicleLocationDto) {
    return `This action updates a #${id} vehicleLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleLocation`;
  }
}
