import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class OrderOperationDTO {
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
