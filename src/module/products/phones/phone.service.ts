import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Phones } from 'src/schemas/phonesShcemas/phones';

@Injectable()
export class PhonesService {
  constructor(
    @InjectModel("phones") private readonly phonesModel: Model<any>,
  ) {}

  async getAllPhones(): Promise<any> {
    const data = await this.phonesModel.find().exec();
    return data;
  }

  async getIphoneDetail(id: string): Promise<any> {
    const currentData = await this.phonesModel.find().exec();
    const result = currentData.find((item) => item._id.toString() === id);
    return result;
  }
}
