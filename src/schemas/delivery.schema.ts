import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Delivery {
  @Prop({ required: false, type: String })
  deliveryPartnerId: string;

  @Prop({ required: true, type: Boolean })
  isActive: boolean;

  @Prop({ required: true, type: Boolean })
  isCancelled: boolean;

  @Prop({ required: true, type: Boolean })
  isHelperRequired: boolean;

  @Prop({ required: true, type: Boolean })
  isReceiverSelf: boolean;

  @Prop({ required: true, type: String })
  start_location: string;

  @Prop({ required: true, type: [String] })
  stop_location: string[];

  @Prop({ required: true, type: String })
  end_location_house_number: string;

  @Prop({ required: true, type: String })
  end_location: string;

  @Prop({ required: true, type: String })
  vehicleType: string;

  @Prop({ required: true, type: String })
  goods_type: string;

  @Prop({ required: true, type: Number })
  goods_quantity: number;

  @Prop({ required: true, type: String })
  goods_dimention: string;

  //not in create

  @Prop({ required: false, type: Number })
  deliveryCost: number;

  @Prop({ required: false, type: Number })
  distance: number;
}

export type DeliveryDocument = Delivery & Document;
export const DeliverySchema = SchemaFactory.createForClass(Delivery);
