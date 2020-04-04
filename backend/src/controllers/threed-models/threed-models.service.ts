import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';

@Injectable()
export class ThreedModelsService {

  private modelsRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor(private firestore:Firestore) {
    this.modelsRef = firestore.db.collection('3dmodels')
  }

  async getAll3DModels(){
    var models = new Array();

    const snapshots = await this.modelsRef.get();
    snapshots.forEach(snapshot => models.push(snapshot.data()));
    
    return models;
  }
}
