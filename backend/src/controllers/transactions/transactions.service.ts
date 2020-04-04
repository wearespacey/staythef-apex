import { Injectable } from '@nestjs/common';
import { Firestore } from 'src/shared/firestore';
import { Transaction } from 'src/models/Transaction';

@Injectable()
export class TransactionsService {
    
    private transactionsRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

    constructor(private firestore:Firestore) {
        this.transactionsRef = firestore.db.collection('transactions')
    }

    async getAllTransactions():Promise<Array<Transaction>>{
        var transactions = new Array();
    
        const snapshots = await this.transactionsRef.get();
        snapshots.forEach(snapshot => transactions.push({id:snapshot.id, ...snapshot.data()}));
        
        return transactions;
    }

    addNewTransaction(){

    }
}
