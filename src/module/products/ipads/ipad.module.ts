import { Module } from '@nestjs/common';
import { IpadController } from './ipad.controler';

@Module({
  imports: [],
  controllers: [IpadController],
})
export class IpadModule {}
