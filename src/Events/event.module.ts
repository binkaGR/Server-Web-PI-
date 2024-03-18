import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EventProviders } from './event.providers';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EventController],
  providers: [
    ...EventProviders,EventService
  ],
})
export class EventModule {}