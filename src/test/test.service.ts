import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '../schemas/test.schemas';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}

  async checkConnection(): Promise<any> {
    try {
      const result = await this.testModel.find().exec(); 
      return result;
    } catch (error) {
      return `Database connection failed: ${error.message}`;
    }
  }
}