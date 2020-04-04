import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';

@Injectable()
export class ThreedPrintersService {
  constructor(private firestore:Firestore) {
    console.log('firestore : ', firestore)
  }
}
