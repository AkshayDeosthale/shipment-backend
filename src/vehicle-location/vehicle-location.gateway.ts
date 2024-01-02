import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { VehicleLocationService } from './vehicle-location.service';
import { CreateVehicleLocationDto } from './dto/create-vehicle-location.dto';
import { UpdateVehicleLocationDto } from './dto/update-vehicle-location.dto';

@WebSocketGateway()
export class VehicleLocationGateway {
  constructor(
    private readonly vehicleLocationService: VehicleLocationService,
  ) {}

  @SubscribeMessage('createVehicleLocation')
  create(@MessageBody() createVehicleLocationDto: CreateVehicleLocationDto) {
    return this.vehicleLocationService.create(createVehicleLocationDto);
  }

  @SubscribeMessage('findAllVehicleLocation')
  findAll() {
    return this.vehicleLocationService.findAll();
  }

  @SubscribeMessage('findOneVehicleLocation')
  findOne(@MessageBody() id: number) {
    return this.vehicleLocationService.findOne(id);
  }

  @SubscribeMessage('updateVehicleLocation')
  update(@MessageBody() updateVehicleLocationDto: UpdateVehicleLocationDto) {
    return this.vehicleLocationService.update(
      updateVehicleLocationDto.id,
      updateVehicleLocationDto,
    );
  }

  @SubscribeMessage('removeVehicleLocation')
  remove(@MessageBody() id: number) {
    return this.vehicleLocationService.remove(id);
  }
}
