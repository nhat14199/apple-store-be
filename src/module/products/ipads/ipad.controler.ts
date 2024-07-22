import { Controller, Get } from '@nestjs/common';

@Controller('products/cats')
export class IpadController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}