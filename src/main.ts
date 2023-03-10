import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Posware')
    .setDescription('Posware API')
    .setVersion('1.0')
    .addTag('posware')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      //forbidNonWhitelisted: true,
    }),
  );

  await app.listen(configService.get('PORT'));
}
bootstrap();
