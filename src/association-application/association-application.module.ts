import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationApplicationController } from './association-application.controller';
import { AssociationApplicationService } from './association-application.service';
import { AssociationApplication } from './association-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssociationApplication])],
  controllers: [AssociationApplicationController],
  providers: [AssociationApplicationService],
})
export class AssociationApplicationModule {}
