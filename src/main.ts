import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { APIPrefix } from './constant/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}
bootstrap();
