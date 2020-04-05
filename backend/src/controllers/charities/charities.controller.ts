import { Controller, Get } from '@nestjs/common';
import { CharitiesService } from './charities.service';
import { Charity } from 'src/models/Charity';

@Controller('charities')
export class CharitiesController {
  constructor(private charitiesService: CharitiesService) {}

  @Get('all')
  async getAllCharities(): Promise<Charity[]> {
    return await this.charitiesService.getAllCharities();
  }
}
