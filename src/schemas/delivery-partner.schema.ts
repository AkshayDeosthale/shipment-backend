import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeliveryPartner {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: false, type: Number })
  deliveryCount: number;

  @Prop({ required: false, type: String })
  activeDeliveryID: string;

  @Prop({
    type: {
      lat: { type: String, required: true },
      long: { type: String, required: true },
    },
    required: true,
  })
  location: {
    lat: string;
    long: string;
  };

  @Prop({
    type: {
      name: { type: String, required: true },
      number: { type: String, required: true },
      relation: { type: String, required: true },
    },
    required: true,
  })
  SOSDetails: {
    name: string;
    number: string;
    relation: string;
  };

  @Prop({
    type: [String],
    required: false,
  })
  vehicleDetails: string[];
}

export type DeliveryPartnerDocument = DeliveryPartner & Document;
export const DeliveryPartnerSchema =
  SchemaFactory.createForClass(DeliveryPartner);
