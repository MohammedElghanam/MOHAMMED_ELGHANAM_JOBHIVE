import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5000',
    methods: 'GET,PUT,PATCH,POST,DELETE', 
    allowedHeaders: 'Content-Type, Accept, Authorization', 
  });


  await app.listen(3001);
}
bootstrap();
