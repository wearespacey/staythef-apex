import { Module } from '@nestjs/common';
import { Firestore } from './firestore';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService, Firestore],
  imports: [UsersModule],
})
export class AppModule {}
