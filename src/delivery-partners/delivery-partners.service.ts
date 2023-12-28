import { Injectable } from '@nestjs/common';
import { CreateDeliveryPartnerDto } from './dto/create-delivery-partner.dto';
import { UpdateDeliveryPartnerDto } from './dto/update-delivery-partner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DeliveryPartner } from 'src/schemas/delivery-partner.schema';
import { Model } from 'mongoose';

@Injectable()
export class DeliveryPartnersService {
  constructor(
    @InjectModel('deliverypartners')
    private DELIVERY: Model<DeliveryPartner>,
  ) {}

  async create(createDeliveryPartnerDto: CreateDeliveryPartnerDto) {
    const temp = {
      ...createDeliveryPartnerDto,
      deliveryCount: 0,
      activeDeliveryID: null,
    };
    const addDelivery = await new this.DELIVERY(temp);
    await addDelivery.save();

    return addDelivery;
  }

  async findAll() {
    const allDeliveryPartners = await this.DELIVERY.find({});
    return allDeliveryPartners;
  }

  async findOne(id: string) {
    const getPersonByID = await this.DELIVERY.findById(id);
    return getPersonByID;
  }

  update(id: number, updateDeliveryPartnerDto: UpdateDeliveryPartnerDto) {
    return `This action updates a #${id} deliveryPartner`;
  }

  async remove(id: string) {
    await this.DELIVERY.findByIdAndDelete(id);
    return `This action removes a #${id} deliveryPartner`;
  }
}
