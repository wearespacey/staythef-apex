import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class Firestore {
  db: admin.firestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(
        require('../../firestore_credentials.json'),
      ),
      databaseURL: 'https://ddd-3ddd.firebaseio.com',
    });
    this.db = admin.firestore();
  }
}
