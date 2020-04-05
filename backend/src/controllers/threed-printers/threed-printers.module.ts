import { Module } from '@nestjs/common';
import { ThreedPrintersController } from './threed-printers.controller';
import { ThreedPrintersService } from './threed-printers.service';
import { AppModule } from 'src/app.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [ThreedPrintersController],
  providers: [ThreedPrintersService],
  imports: [SharedModule]
})
export class ThreedPrintersModule {}
