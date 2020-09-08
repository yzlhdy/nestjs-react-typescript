import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api')

  const ports = process.env.PORT
  await app.listen(ports || 8080);
  Logger.log(`Service is http://localhost:${ports}`)
}
bootstrap();
