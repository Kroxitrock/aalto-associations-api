import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getHello(): Promise<Event[]> {
    return this.eventService.findAll();
  }
}
