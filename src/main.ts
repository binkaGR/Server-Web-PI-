import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const express = require('express');
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  
  app.use(cors({
    origin: 'http://localhost:4200'
  }));
  await app.listen(9090);
}
bootstrap();
