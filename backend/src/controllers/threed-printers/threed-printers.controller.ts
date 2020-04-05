import { Controller, Get, UseInterceptors, Post, Body } from '@nestjs/common';
import { ThreedPrintersService } from './threed-printers.service';
import { ThreeDPrinterDTO } from './threed-printers.dto';

@Controller('3dprinters')
export class ThreedPrintersController {
  constructor(private service: ThreedPrintersService) {}

  @Get('all')
  getAll3DPrinters() {
    return this.service.getAll3DPrinters();
  }

  @Post('new')
  async createPrinter(@Body() printerDTO: ThreeDPrinterDTO): Promise<String> {
    return this.service.createPrinter(printerDTO);
  }
}
