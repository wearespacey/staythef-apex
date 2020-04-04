import { Controller, Get } from '@nestjs/common';
import { ThreedModelsService } from './threed-models.service';

@Controller('3dmodels')
export class ThreedModelsController {
    constructor(private service:ThreedModelsService){}

    @Get()
    async getAll3DModels(){
        return await this.service.getAll3DModels();
    }
}
