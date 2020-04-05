import { Module } from '@nestjs/common';
import { CharitiesController } from './charities.controller';
import { CharitiesService } from './charities.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [CharitiesController],
  providers: [CharitiesService],
  imports: [SharedModule],
})
export class CharitiesModule {}
