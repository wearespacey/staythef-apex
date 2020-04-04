import { Module } from '@nestjs/common';
import { PrintersController } from './printers.controller';

@Module({
  controllers: [PrintersController]
})
export class PrintersModule {}
