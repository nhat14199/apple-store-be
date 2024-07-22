import { Phones } from 'src/schemas/phonesShcemas/phones';
import { PhonesService } from './phone.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products/phones')
export class PhoneController {
  constructor(private readonly phoneService: PhonesService) {}
  @Get()
  async getAllPhone(): Promise<Phones[]> {
    try {
      const phones = await this.phoneService.getAllPhones();
      return phones;
    } catch (error) {
      return error;
    }
  }
  @Get('/:id')
  async getIphoneDetail(@Param('id') id: string): Promise<Phones> {
    try {
      const resp = await this.phoneService.getIphoneDetail(id);
      return resp;
    } catch (error) {
      return error;
    }
  }
}
