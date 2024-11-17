import { Module } from '@nestjs/common';
import { EventRequestService } from './event-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRequest } from './event-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventRequest])],
  providers: [EventRequestService],
})
export class EventRequestModule {}
