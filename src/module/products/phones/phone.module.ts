import { Module } from '@nestjs/common';
import { PhoneController } from './phone.controler';
import { PhonesService } from './phone.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Phones, PhonesSchema } from 'src/schemas/phonesShcemas/phones';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phones.name, schema: PhonesSchema }]),
  ],
  controllers: [PhoneController],
  providers: [PhonesService],
})
export class PhoneModule {}
