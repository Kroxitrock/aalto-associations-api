import { Controller, Get } from '@nestjs/common';
import { AssociationApplicationService } from './association-application.service';
import { AssociationApplication } from './association-application.entity';

@Controller('association-applications')
export class AssociationApplicationController {
  constructor(
    private readonly associationApplicationService: AssociationApplicationService,
  ) {}

  @Get()
  getAssociationApplications(): Promise<AssociationApplication[]> {
    return this.associationApplicationService.findAll();
  }
}
