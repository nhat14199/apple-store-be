import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestSchema } from 'src/schemas/test.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
