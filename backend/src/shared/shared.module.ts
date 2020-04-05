import { Module } from '@nestjs/common';
import { Firestore } from './firestore';

@Module({
    providers:[Firestore],
    exports:[Firestore]
})
export class SharedModule {}
