import { Module } from '@nestjs/common';
import { ThreedPrintersController } from './threed-printers.controller';
import { ThreedPrintersService } from './threed-printers.service';

@Module({
  controllers: [ThreedPrintersController],
  providers: [ThreedPrintersService]
})
export class ThreedPrintersModule {}
