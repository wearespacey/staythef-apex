import { Module } from '@nestjs/common';
import { Firestore } from './firestore';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { ThreedModelsModule } from './controllers/threed-models/threed-models.module';
import { ThreedPrintersModule } from './controllers/threed-printers/threed-printers.module';

@Module({
  controllers: [AppController],
  providers: [AppService, Firestore],
  imports: [UsersModule, ThreedModelsModule, ThreedPrintersModule],
})
export class AppModule {}