import { Module } from '@nestjs/common';
import { UsersModule } from './controllers/users/users.module';
import { ThreedModelsModule } from './controllers/threed-models/threed-models.module';
import { ThreedPrintersModule } from './controllers/threed-printers/threed-printers.module';

@Module({
  imports: [UsersModule, ThreedPrintersModule, ThreedModelsModule],
})
export class AppModule {}
