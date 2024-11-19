import { Controller, Get, Param } from '@nestjs/common';
import { AssociationService } from './association.service';
import { Association } from './association.entity';
import { Event } from '../event/event.entity';
import { EventService } from 'src/event/event.service';

@Controller('associations')
export class AssociationController {
  constructor(
    private readonly associationService: AssociationService,
    private readonly eventService: EventService,
  ) {}

  @Get()
  getAssociations(): Promise<Association[]> {
    return this.associationService.findAll();
  }

  @Get('/:id/events')
  getAssociationEvents(@Param('id') id: number): Promise<Event[]> {
    console.log(id);
    return this.eventService.findByAssociationId(id);
  }
}
