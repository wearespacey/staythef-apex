import { Injectable } from '@nestjs/common';
import { Firestore } from './firestore';
import { Role } from './models/Roles';

@Injectable()
export class AppService {
  constructor(private firestore: Firestore) {}
  getHello(): string {
    let creator: Role = {
      id: '1',
      name: 'creator',
    };
    let docRef = this.firestore.db.collection('roles').doc('creator');
    let setData = docRef.set(creator);

    return 'Hello World!';
  }
}
