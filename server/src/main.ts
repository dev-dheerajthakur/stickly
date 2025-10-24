import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // change this to your frontend domain in production
    methods: ['GET', 'POST'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
