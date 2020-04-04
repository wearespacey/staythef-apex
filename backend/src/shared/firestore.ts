import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
//import * as serviceAccount from '../../local.settings.json';

@Injectable()
export class Firestore {
  db: admin.firestore.Firestore;

  params = {
    type: process.env['Values.type'],
    projectId: process.env['Values.project_id'],
    privateKeyId: process.env['Values.private_key_id'],
    privateKey: process.env['Values.private_key'],
    clientEmail: process.env['Values.client_email'],
    clientId: process.env['Values.client_id'],
    authUri: process.env['Values.auth_uri'],
    tokenUri: process.env['Values.token_uri'],
    authProviderX509CertUrl: process.env['Values.auth_provider_x509_cert_url'],
    clientC509CertUrl: process.env['Values.client_x509_cert_url'],
  };

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(this.params),
    });
    this.db = admin.firestore();
  }
}
