import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './apis/authentication/authentication.module';
import { TransformAPIResponseInterceptor } from './services/request-interceptor.service';

@Module({
  imports: [
    AuthenticationModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27018/panji-pakad'
    )
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformAPIResponseInterceptor,
    },
    AppService
  ],
})
export class AppModule {}
