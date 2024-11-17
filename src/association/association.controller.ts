import { Controller, Get } from '@nestjs/common';
import { AssociationService } from './association.service';
import { Association } from './association.entity';

@Controller('association')
export class AssociationController {
    constructor(private readonly associationService: AssociationService) {}

    @Get()
    getAssociations(): Promise<Association[]> {
        return this.associationService.findAll();
    }
}
