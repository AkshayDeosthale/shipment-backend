import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

enum GenderState {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHERS = 'Others',
}

class LocationDTO {
  @IsNotEmpty()
  @IsNumberString()
  lat: string;

  @IsNotEmpty()
  @IsNumberString()
  long: string;
}

class VehiclenDTO {
  @IsNotEmpty()
  @IsString()
  vehicleType: string;

  @IsNotEmpty()
  @IsString()
  modelName: string;

  @IsNotEmpty()
  @IsString()
  vehicleNumber: string;

  @IsNotEmpty()
  @IsString()
  condition: string;

  @IsNotEmpty()
  @IsString()
  year_of_purchase: string;

  @IsNotEmpty()
  @IsString()
  RC_number: string;

  @IsNotEmpty()
  @IsBoolean()
  is_insured: boolean;

  @IsNotEmpty()
  @IsBoolean()
  on_rent: boolean;

  @ValidateIf((object, value) => object.on_rent === true)
  @IsNotEmpty({ message: 'Rent detail is required when vehicle is rented' })
  @IsString()
  rent_details: string;
}

class SosDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumberString()
  number: string;

  @IsNotEmpty()
  @IsString()
  readonly relation: string;
}

export class CreateDeliveryPartnerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(GenderState)
  readonly gender: GenderState;

  @IsNotEmpty()
  @IsNumberString()
  readonly phone_number: number;

  @ValidateNested()
  //   @Type(() => LocationDTO)
  readonly location: LocationDTO;

  @ValidateNested()
  //   @Type(() => VehiclenDTO)
  readonly vehicleDetails: VehiclenDTO;

  @ValidateNested()
  //   @Type(() => SosDTO)
  readonly SOSDetails: SosDTO;
}
