import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/firestore';

@Injectable()
export class ThreedPrintersService {
  constructor(private fire: Firestore) {}
}
