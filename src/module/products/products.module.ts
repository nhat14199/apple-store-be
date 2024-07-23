import { Module } from '@nestjs/common';
import { PhoneModule } from './phones/phone.module';
import { ProductsController } from './product.controller';
import { MacsModule } from './macs/mac.module';
import { IpadModule } from './ipads/ipad.module';

@Module({
  imports: [PhoneModule, IpadModule, MacsModule],
  controllers: [ProductsController],

})
export class ProductsModule {}
