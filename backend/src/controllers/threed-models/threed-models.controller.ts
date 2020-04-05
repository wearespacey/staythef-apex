import { Controller, Get, Post, Body } from '@nestjs/common';
import { ThreedModelsService } from './threed-models.service';
import { ThreeDModelDTO } from './threed-models.dto';
import { Observable } from 'rxjs';

@Controller('3dmodels')
export class ThreedModelsController {
  constructor(private service: ThreedModelsService) {}

  @Get('all')
  getAll3DModels() {
    return this.service.getAll3DModels();
  }

  @Post('new')
  async createModel(@Body() createModelDTO: ThreeDModelDTO): Promise<String> {
    return this.service.createModel(createModelDTO);
  }
}
