import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleLocationDto } from './create-vehicle-location.dto';

export class UpdateVehicleLocationDto extends PartialType(CreateVehicleLocationDto) {
  id: number;
}
