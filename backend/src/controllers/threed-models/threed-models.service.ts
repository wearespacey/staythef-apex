import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/firestore';

@Injectable()
export class ThreedModelsService {
  constructor(private fire: Firestore) {}

  getAll3DModels() {
    this.fire.db.collection('threedmodels').get();
  }
}
