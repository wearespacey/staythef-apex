import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';
import * as admin from 'firebase-admin';
import { ThreeDPrinter } from 'src/models/3DPrinter';

@Injectable()
export class ThreedPrintersService {

  private printersRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor(private firestore:Firestore) {
    this.printersRef = firestore.db.collection('3dprinters')
  }

  async getAll3DPrinters():Promise<Array<ThreeDPrinter>>{
    var printers = new Array();

    const snapshots = await this.printersRef.get();
    snapshots.forEach(snapshot => printers.push({id:snapshot.id, ...snapshot.data()}));
    
    return printers;
  }
}
