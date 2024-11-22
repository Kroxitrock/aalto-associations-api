import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { User } from 'src/user/user.entity';
import CreateEventDto from './create-event.dto';
import { Association } from 'src/association/association.entity';

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

  @Get('/:id/participants')
  getMyEvents(@Param('id') id: number): Promise<User[]> {
    return this.eventService
      .findOne(id)
      .then((event) => event.participants ?? []);
  }

  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const event = {
      ...new Event(),
      ...createEventDto,
      association: { id: createEventDto.associationId } as Association,
    };

    return this.eventService.create(event);
  }

  @Post('/:id/join')
  async joinEvent(@Param('id') eventId: number) {
    this.eventService.addParticipant(eventId, 1);
  }
}
