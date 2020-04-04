import { Module } from '@nestjs/common';
import { Firestore } from './firestore';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService, Firestore],
})
export class AppModule {}
