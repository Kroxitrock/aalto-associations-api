import { Controller, Get } from '@nestjs/common';
import { EventRequestService } from './event-request.service';
import { EventRequest } from './event-request.entity';

@Controller('event-requests')
export class EventRequestController {
  constructor(private readonly eventRequestService: EventRequestService) {}

  @Get()
  getEventRequest(): Promise<EventRequest[]> {
    return this.eventRequestService.findAll();
  }
}
