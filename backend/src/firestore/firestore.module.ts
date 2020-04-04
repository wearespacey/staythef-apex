import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';

@Module({
  providers: [FirestoreService],
})
export class FirestoreModule {}
