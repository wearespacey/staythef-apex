import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FireStoreService } from './firestore_service';
import { Role } from './models/Roles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly test: FireStoreService) {}

  @Get()
  getHello(): string {
    this.test.getUsersByRole(Role.CREATOR);
    return this.appService.getHello();
  }
}
