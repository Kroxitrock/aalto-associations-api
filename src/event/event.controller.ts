import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvents(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get('/:id')
  getEventById(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }
}
