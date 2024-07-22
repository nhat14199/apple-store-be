import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneModule } from './module/products/phones/phone.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Apple-store'),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
