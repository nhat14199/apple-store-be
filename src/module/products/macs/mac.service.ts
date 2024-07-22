import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Macs } from 'src/schemas/macsSchemas/macs';
import { Phones } from 'src/schemas/phonesShcemas/phones';

@Injectable()
export class MacsService {
  constructor(@InjectModel(Macs.name) private readonly macModel: Model<Macs>) {}

  async getAllMac(): Promise<Macs[]> {
    const data = await this.macModel.find().exec();
    return data;
  }

  async getMacdetail(_id: string): Promise<Macs> {
    const currentData = await this.macModel.find().exec();
    const result = currentData.find((item) => item._id.toString() === _id);
    return result;
  }
}
