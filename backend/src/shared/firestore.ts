import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
//import * as serviceAccount from '../../local.settings.json';

@Injectable()
export class Firestore {
  db: admin.firestore.Firestore;

  params = {
    type: process.env['Values.type'],
    project_id: process.env['Values.project_id'],
    private_key_id: process.env['Values.private_key_id'],
    private_key: process.env['Values.private_key'],
    client_email: process.env['Values.client_email'],
    client_id: process.env['Values.client_id'],
    auth_uri: process.env['Values.auth_uri'],
    token_uri: process.env['Values.token_uri'],
    auth_provider_x509_cert_url:
      process.env['Values.auth_provider_x509_cert_url'],
    clientX509_cert_Url: process.env['Values.client_x509_cert_url'],
  };

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(this.params),
    });
    this.db = admin.firestore();
  }
}
