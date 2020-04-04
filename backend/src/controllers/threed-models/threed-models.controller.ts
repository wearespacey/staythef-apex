import { Controller, Get } from '@nestjs/common';
import { ThreedModelsService } from './threed-models.service';

@Controller('3dmodels')
export class ThreedModelsController {
    constructor(private service:ThreedModelsService){}

    @Get()
    getAll3DModels(){
        return this.service.getAll3DModels();
    }
}
