import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
//import * as serviceAccount from '../../local.settings.json';

@Injectable()
export class Firestore {
  db: admin.firestore.Firestore;

  constructor() {
    console.log(
      'processenvdfgszgfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      process.env.project_id,
    );

    let params: admin.ServiceAccount = {
      //type: process.env['Values.type'],
      projectId: process.env.project_id,
      //private_key_id: process.env['Values.private_key_id'],
      privateKey: process.env.private_key,
      clientEmail: process.env.client_email,
      //clientId: process.env['Values.client_id'],
      //auth_uri: process.env['Values.auth_uri'],
      //token_uri: process.env['Values.token_uri'],
      //auth_provider_x509_cert_url:
      //  process.env['Values.auth_provider_x509_cert_url'],
      //client_X509_cert_Url: process.env['Values.client_x509_cert_url'],
    };

    admin.initializeApp({
      credential: admin.credential.cert(params),
      databaseURL: 'https://ddd-3ddd.firebaseio.com',
    });
    this.db = admin.firestore();
  }
}
