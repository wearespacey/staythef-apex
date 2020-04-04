import { Module } from '@nestjs/common';
import { FirestoreModule } from './firestore/firestore.module';

@Module({
  imports: [FirestoreModule],
})
export class AppModule {}
