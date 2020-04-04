import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';
import { Charity } from 'src/models/Charity';

@Injectable()
export class CharitiesService {
  private charitiesRef: FirebaseFirestore.CollectionReference<
    FirebaseFirestore.DocumentData
  >;

  constructor(private fire: Firestore) {
    this.charitiesRef = fire.db.collection('charities');
  }

  async getAllCharities(): Promise<Charity[]> {
    let charities = new Array();

    const snapshots = await this.charitiesRef.get();
    snapshots.forEach(snapshot =>
      charities.push({ id: snapshot.id, ...snapshot.data() }),
    );

    return charities;
  }
}
