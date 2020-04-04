import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FireStoreService } from './firestore_service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FireStoreService],
})
export class AppModule {}
