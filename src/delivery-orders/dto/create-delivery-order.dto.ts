import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDeliveryOrderDto {
  @IsOptional()
  @IsString()
  deliveryPartnerId: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isCancelled: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isHelperRequired: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isReceiverSelf: boolean;

  @IsNotEmpty()
  @IsString()
  start_location: string;

  @IsArray()
  stop_location: string[];

  @IsNotEmpty()
  @IsString()
  end_location_house_number: string;

  @IsNotEmpty()
  @IsString()
  end_location: string;

  @IsNotEmpty()
  @IsString()
  vehicleType: string;

  @IsNotEmpty()
  @IsString()
  goods_type: string;

  @IsNotEmpty()
  @IsString()
  goods_quantity: string;

  @IsNotEmpty()
  @IsString()
  goods_dimention: string;
}
