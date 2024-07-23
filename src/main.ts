import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Hoặc bạn có thể chỉ định nguồn cụ thể
  });
  // await app.listen(3003, () => console.log('connect success '));
  await app.listen(process.env.PORT || 3000, () =>
    console.log('connect success ', process.env.MONGODB_URI),
  );
}
bootstrap();
