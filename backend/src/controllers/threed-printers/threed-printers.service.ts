import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';
import * as admin from 'firebase-admin';

@Injectable()
export class ThreedPrintersService {

  private printersRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor(private firestore:Firestore) {
    this.printersRef = firestore.db.collection('3dprinters')
  }

  async getAll3DPrinters(){
    var printers = new Array();

    const snapshots = await this.printersRef.get();
    snapshots.forEach(snapshot => printers.push(snapshot.data()));
    
    return printers;
  }
}
