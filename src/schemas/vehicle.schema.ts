import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vehicle {
  @Prop({ required: true, type: String })
  vehicleType: string;

  @Prop({ required: true, type: String })
  modelName: string;

  @Prop({ required: true, type: String })
  vehicleNumber: string;

  @Prop({ required: true, type: String })
  condition: string;

  @Prop({ required: true, type: String })
  year_of_purchase: string;

  @Prop({ required: true, type: String })
  RC_number: string;

  @Prop({ required: true, type: Boolean })
  is_insured: boolean;

  @Prop({ required: true, type: Boolean })
  on_rent: boolean;

  @Prop({ required: true, type: String })
  rent_details: string;
}

export type VehicleDocument = Vehicle & Document;
export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
