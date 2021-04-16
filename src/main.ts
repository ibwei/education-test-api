import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_CONFIG } from './config/app.config';
// import * as csurf from 'csurf';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as rateLimit from 'express-rate-limit';

/**
 * @description 应用入口
 * 设置路由前缀
 * 开启跨域访问
 * 开启 CSRF 保护
 * 开启访问速率保护
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(APP_CONFIG.ROUTER_PREFIX);
  app.enableCors();
  // app.use(csurf());
  app.use(rateLimit({ windowMx: APP_CONFIG.WINDOW_MS, max: APP_CONFIG.MAX }));
  await app.listen(APP_CONFIG.PORT);
}
bootstrap();
