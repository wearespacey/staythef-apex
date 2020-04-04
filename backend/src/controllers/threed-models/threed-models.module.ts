import { Module } from '@nestjs/common';
import { ThreedModelsController } from './threed-models.controller';
import { ThreedModelsService } from './threed-models.service';

@Module({
  controllers: [ThreedModelsController],
  providers: [ThreedModelsService],
})
export class ThreedModelsModule {}
