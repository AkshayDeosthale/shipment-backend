import { IsNotEmpty, IsString } from 'class-validator';

export class VehiclePosition {
  @IsNotEmpty()
  @IsString()
  latitude: string;

  @IsNotEmpty()
  @IsString()
  longitude: string;
}
