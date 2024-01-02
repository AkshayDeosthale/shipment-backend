import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from 'src/schemas/vehicle.schema';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel('deliverypartnersVehicles')
    private VEHICLE: Model<Vehicle>,
  ) {}

  async findAll() {
    const allVehicles = await this.VEHICLE.find({});
    return allVehicles;
  }

  findOne(id: string) {
    return this.VEHICLE.findById(id);
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: string) {
    return this.VEHICLE.findByIdAndDelete(id);
  }
}
