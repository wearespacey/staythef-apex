import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SharedModule]
})
export class UsersModule {}
