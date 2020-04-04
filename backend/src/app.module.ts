import { Module } from '@nestjs/common';
import { Firestore } from './firestore';

@Module({
  providers: [Firestore],
})
export class AppModule {}
