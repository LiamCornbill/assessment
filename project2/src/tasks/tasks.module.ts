import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
