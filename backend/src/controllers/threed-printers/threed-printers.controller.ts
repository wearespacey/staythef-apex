import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ThreedPrintersService } from './threed-printers.service';

@Controller('3dprinters')
export class ThreedPrintersController {
    constructor(private service:ThreedPrintersService){}

    @Get()
    getAll3DPrinters(){
        return this.service.getAll3DPrinters();
    }
}
