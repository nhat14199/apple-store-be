import { Module } from '@nestjs/common';
import { PhoneController } from './phone.controler';
import { PhonesService } from './phone.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonesSchema } from 'src/schemas/phonesShcemas/phones';
import { MacsSchema } from 'src/schemas/macsSchemas/macs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "phones", schema: MacsSchema }]),
  ],
  controllers: [PhoneController],
  providers: [PhonesService],
})
export class PhoneModule {}
