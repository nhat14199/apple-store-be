import { Controller, Get, Param } from '@nestjs/common';
import { MacsService } from './mac.service';
// import { Macs } from 'src/schemas/macsSchemas/macs';

@Controller('products/macs')
export class MacsController {
  constructor(private readonly macService: MacsService) {}
  @Get()
  async getAllMacs(): Promise<any> {
    try {
      const macs = await this.macService.getAllMac();
      return macs;
    } catch (error) {
      return error;
    }
  }
  @Get('/:id')
  async getMacDetail(@Param('id') id: string): Promise<any> {
    try {
      const resp = await this.macService.getMacdetail(id);      
      return resp;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
}
