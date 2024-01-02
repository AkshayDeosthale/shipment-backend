import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class VehiclePosition {
  @IsNotEmpty()
  @IsString()
  latitude: string;

  @IsNotEmpty()
  @IsString()
  longitude: string;

  @IsNotEmpty()
  @IsBoolean()
  isTripCompleted: boolean;
}
