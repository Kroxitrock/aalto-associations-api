import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationApplicationService } from './association-application.service';
import { AssociationApplication } from './association-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssociationApplication])],
  providers: [AssociationApplicationService],
})
export class AssociationApplicationModule {}
