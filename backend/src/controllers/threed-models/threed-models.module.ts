import { Module } from '@nestjs/common';
import { ThreedModelsController } from './threed-models.controller';
import { ThreedModelsService } from './threed-models.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [ThreedModelsController],
  providers: [ThreedModelsService],
  imports:[SharedModule]
})
export class ThreedModelsModule {}
