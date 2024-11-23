import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Association } from 'src/association/association.entity';
import { Event } from 'src/event/event.entity';
import { UpcomingEventDto } from './upcoming-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AssociationRole } from 'src/association-members/association-member.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me/associations')
  getMyAssociations(@Req() request): Promise<Association[]> {
    return this.userService
      .findOne(request.user.id)
      .then((user) => user.associations ?? []);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me/associations/:associationId/role')
  getMyRoleForAssociation(
    @Param('associationId') associationId: number,
    @Req() request,
  ): Promise<AssociationRole | 'NONE'> {
    return this.userService.roleForAssociation(request.user.id, associationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me/associations/events/upcoming')
  getUpcomingEventsOfMyAssociations(
    @Req() request,
  ): Promise<UpcomingEventDto[]> {
    return this.userService.finAllUpcomingEventsOfAssociationsOfUser(
      request.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me/events')
  getMyEvents(@Req() request): Promise<Event[]> {
    return this.userService
      .findOne(request.user.id)
      .then((user) => user.events ?? []);
  }
}
