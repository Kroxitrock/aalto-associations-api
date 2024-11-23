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
import EventDetailsDto from './eventDetails.dto';
import { OptionalJwtAuthGuard } from 'src/auth/optional-jwt-auth.guard';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvents(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('/:id')
  getEventById(
    @Param('id') id: number,
    @Req() request,
  ): Promise<EventDetailsDto> {
    return this.eventService.findOneById(id, request.user?.id);
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
      createEventDto.association.id,
    );

    const event = {
      ...new Event(),
      ...createEventDto,
    };

    return this.eventService.create(
      event,
      request.user.id,
      createEventDto.association.id,
    );
  }

  @UseGuards(JwtAuthGuard)
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
