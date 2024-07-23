import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './module/products/products.module';
import { TestModule } from './test/test.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ProductsModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
