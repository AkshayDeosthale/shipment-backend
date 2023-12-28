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
    type: [
      {
        vehicleType: { type: String, required: true },
        modelName: { type: String, required: true },
        vehicleNumber: { type: String, required: true },
        condition: { type: String, required: true },
        year_of_purchase: { type: String, required: true },
        RC_number: { type: String, required: true },
        is_insured: { type: Boolean, required: true },
        on_rent: { type: Boolean, required: true },
        rent_details: { type: String, required: true },
      },
    ],
    required: false,
  })
  vehicleDetails: {
    vehicleType: string;
    modelName: string;
    vehicleNumber: string;
    condition: string;
    year_of_purchase: string;
    RC_number: string;
    is_insured: boolean;
    on_rent: boolean;
    rent_details: string;
  }[];
}

export type DeliveryPartnerDocument = DeliveryPartner & Document;
export const DeliveryPartnerSchema =
  SchemaFactory.createForClass(DeliveryPartner);
