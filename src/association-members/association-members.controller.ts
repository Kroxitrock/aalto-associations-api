import { Controller, Get } from '@nestjs/common';
import { AssociationMembersService } from './association-members.service';
import { AssociationMembers } from './association-member.entity';

@Controller('association-members')
export class AssociationMembersController {
  constructor(
    private readonly associationMembersService: AssociationMembersService,
  ) {}

  @Get()
  getAssociationMembers(): Promise<AssociationMembers[]> {
    return this.associationMembersService.findAll();
  }
}
