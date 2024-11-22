import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AssociationService } from './association.service';
import { Association } from './association.entity';
import { Event } from '../event/event.entity';
import { EventService } from 'src/event/event.service';
import { AssociationRole } from 'src/association-members/association-member.entity';
import AssociationWithRoleDto from './association-with-role.dto';
import { UpcomingEventDto } from 'src/user/upcoming-event.dto';

@Controller('associations')
export class AssociationController {
  constructor(
    private readonly associationService: AssociationService,
    private readonly eventService: EventService,
  ) {}

  @Get()
  getAssociations(
    @Query('nameSearch') nameSearch?: string,
  ): Promise<Association[]> {
    return this.associationService.findFiltered(nameSearch);
  }

  @Get('/:id/events')
  getAssociationEvents(@Param('id') id: number): Promise<UpcomingEventDto[]> {
    return this.eventService.findByAssociationId(id, 1);
  }

  @Get('/:id')
  getAssociationById(@Param('id') id: number): Promise<AssociationWithRoleDto> {
    return this.associationService.findOneWithRole(id, 1);
  }

  @Post('/:id/join')
  async joinEvent(@Param('id') eventId: number) {
    this.associationService.addMember(eventId, 1);
  }

  @Post()
  async createAssociation(@Body() association: Association) {
    return this.associationService.create(association, 1);
  }
}
