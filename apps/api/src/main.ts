import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const apiPort = configService.get<number>('api.port', 8080);

  if (configService.get('env.type') === 'development') {
    setupSwagger(app);
  }

  await app.listen(apiPort);
}
bootstrap();
