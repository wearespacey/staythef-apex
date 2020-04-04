import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Role } from '../models/Roles';
import * as firestoreCredentials from '../../firestore_credentials.json';

@Injectable()
export class FirestoreService {
  db: admin.firestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(
        require('../../firestore_credentials.json'),
      ),
    });
    this.db = new admin.firestore.Firestore();
  }

  getUsersByRole(role: Role) {
    let usersRef = this.db.collection('users');
    let queryRef = usersRef.where('role', '==', role);
    let users = queryRef
      .get()
      .then(() => {
        console.log(`All ${role} retrieved`);
      })
      .catch((err: any) => {
        console.log('Error getting document', err);
      });

    return users;
  }
}
