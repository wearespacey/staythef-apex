import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';
import { ThreeDModel } from 'src/models/3DModel';
import { ThreeDModelDTO } from './threed-models.dto';

@Injectable()
export class ThreedModelsService {
  private modelsRef: FirebaseFirestore.CollectionReference<
    FirebaseFirestore.DocumentData
  >;

  constructor(private firestore: Firestore) {
    this.modelsRef = firestore.db.collection('3dmodels');
  }

  async getAll3DModels(): Promise<Array<ThreeDModel>> {
    var models = new Array();

    const snapshots = await this.modelsRef.get();
    snapshots.forEach((snapshot) =>
      models.push({ id: snapshot.id, ...snapshot.data() }),
    );

    return models;
  }

  async createModel(createModelDTO: ThreeDModelDTO): Promise<String> {
    let newId: String;
    newId = (await this.modelsRef.add(createModelDTO)).id;
    return newId;
  }
}
