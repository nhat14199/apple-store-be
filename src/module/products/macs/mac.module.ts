import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  MacsSchema } from 'src/schemas/macsSchemas/macs';
import { MacsController } from './mac.controler';
import { MacsService } from './mac.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: "macs", schema: MacsSchema }]),
  ],
  controllers: [MacsController],
  providers: [MacsService],
})
export class MacsModule {}


