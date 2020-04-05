import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [SharedModule]
})
export class TransactionsModule {}
