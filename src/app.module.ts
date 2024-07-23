import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './module/products/products.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Nhat323242:Nhat323242@cluster0.ooheyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ProductsModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
