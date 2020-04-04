import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private service:TransactionsService){}

    @Get()
    getAllTransactions(){
        return this.service.getAllTransactions();
    }
}
