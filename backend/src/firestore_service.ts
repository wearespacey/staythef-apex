import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Role } from './models/Roles';
import * as firestoreCredentials from '../firestore_credentials.json';

@Injectable()
export class FireStoreService{
    
    constructor(private db:admin.firestore.Firestore){
        admin.initializeApp({
            credential: admin.credential.cert(firestoreCredentials.toString()),
            databaseURL: "https://ddd-3ddd.firebaseio.com"
        });
        db = new admin.firestore.Firestore();

        console.log(`All users : ${this.getUsersByRole(Role.CREATOR)}`);
    }

    getUsersByRole(role:Role) {
        let usersRef = this.db.collection('users')
        let queryRef = usersRef.where('role', '==', role);
        let users = queryRef.get()    
        .then(() => {
                console.log(`All ${role} retrieved`);
                }
            )
            .catch((err: any) => {
                console.log('Error getting document', err);
            }
        );

        return users;
    }
}