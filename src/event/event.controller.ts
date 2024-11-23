import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { User } from 'src/user/user.entity';
import CreateEventDto from './create-event.dto';
import { Association } from 'src/association/association.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  getEventParticipants(@Param('id') id: number): Promise<User[]> {
    return this.eventService
      .findOne(id)
      .then((event) => event.participants ?? []);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createEvent(@Body() createEventDto: CreateEventDto, @Req() request) {
    this.eventService.validateUserIsLeaderOfAssociation(
      request.user.id,
      createEventDto.associationId,
    );

    const event = {
      ...new Event(),
      ...createEventDto,
      association: { id: createEventDto.associationId } as Association,
    };

    return this.eventService.create(event);
  }

  @Put('/:id')
  async updateEvent(@Param('id') eventId: number, @Body() event: Event) {
    this.eventService.update(event, eventId);
  }

  @Put('/:id')
  async updateEvent(@Param('id') eventId: number, @Body() event: Event) {
    this.eventService.update(event, eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:id/join')
  async joinEvent(@Param('id') eventId: number, @Req() request) {
    this.eventService.addParticipant(eventId, request.user.id);
  }
}
