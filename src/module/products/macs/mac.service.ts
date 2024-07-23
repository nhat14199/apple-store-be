import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Macs } from 'src/schemas/macsSchemas/macs';


@Injectable()
export class MacsService {
  constructor(@InjectModel("macs") private readonly macModel: Model<any>) {}

  async getAllMac(): Promise<any> {
    const data = await this.macModel.find().exec();
    return data;
  }

  async getMacdetail(_id: string): Promise<any> {
    const currentData = await this.macModel.find().exec();
    const result = currentData.find((item) => item._id.toString() === _id);
    return result;
  }
}
