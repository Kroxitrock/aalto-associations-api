import { Module } from '@nestjs/common';
import { EventRequestController } from './event-request.controller';
import { EventRequestService } from './event-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRequest } from './event-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventRequest])],
  controllers: [EventRequestController],
  providers: [EventRequestService],
})
export class EventRequestModule {}
