import { Module } from '@nestjs/common';
import { UsersModule } from './controllers/users/users.module';
import { ThreedModelsModule } from './controllers/threed-models/threed-models.module';
import { ThreedPrintersModule } from './controllers/threed-printers/threed-printers.module';
import { CharitiesModule } from './controllers/charities/charities.module';
import { TransactionsModule } from './controllers/transactions/transactions.module';

@Module({
  imports: [
    UsersModule,
    ThreedPrintersModule,
    ThreedModelsModule,
    CharitiesModule,
    TransactionsModule,
  ],
})
export class AppModule {}
