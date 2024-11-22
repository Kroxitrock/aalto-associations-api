import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Association } from 'src/association/association.entity';
import { Event } from 'src/event/event.entity';
import { UpcomingEventDto } from './upcoming-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me/associations')
  getMyAssociations(): Promise<Association[]> {
    return this.userService.findOne(1).then((user) => user.associations ?? []);
  }

  @Get('/me/associations/events/upcoming')
  getUpcomingEventsOfMyAssociations(): Promise<UpcomingEventDto[]> {
    return this.userService.finAllUpcomingEventsOfAssociationsOfUser(1);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me/events')
  getMyEvents(@Req() request): Promise<Event[]> {
    return this.userService.findOne(1).then((user) => user.events ?? []);
  }
}
