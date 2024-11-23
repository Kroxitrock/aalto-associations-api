import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AssociationService } from './association.service';
import { Association } from './association.entity';
import { EventService } from 'src/event/event.service';
import AssociationWithRoleDto from './association-with-role.dto';
import { UpcomingEventDto } from 'src/user/upcoming-event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OptionalJwtAuthGuard } from 'src/auth/optional-jwt-auth.guard';

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

  @UseGuards(OptionalJwtAuthGuard)
  @Get('/:id/events')
  getAssociationEvents(
    @Param('id') id: number,
    @Req() request,
  ): Promise<UpcomingEventDto[]> {
    return this.eventService.findByAssociationId(id, request.user?.id ?? -1);
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('/:id')
  getAssociationById(
    @Param('id') id: number,
    @Req() request,
  ): Promise<AssociationWithRoleDto> {
    return this.associationService.findOneWithRole(id, request.user?.id ?? -1);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/:id/join')
  async joinEvent(@Param('id') eventId: number, @Req() request) {
    this.associationService.addMember(eventId, request.user.id);
  }

  @Put('/:id')
  async updateAssociation(
    @Param('id') associationId: number,
    @Body() association: Association,
  ) {
    this.associationService.update(association, associationId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createAssociation(@Body() association: Association, @Req() request) {
    return this.associationService.create(association, request.user.id);
  }
}
