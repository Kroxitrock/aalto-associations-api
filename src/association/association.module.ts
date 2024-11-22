import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
import { AssociationService } from './association.service';
import { AssociationController } from './association.controller';
import { EventModule } from 'src/event/event.module';
import { User } from 'src/user/user.entity';
import { AssociationMembers } from 'src/association-members/association-member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Association, User, AssociationMembers]),
    EventModule,
  ],
  providers: [AssociationService],
  controllers: [AssociationController],
  exports: [AssociationService],
})
export class AssociationModule {}
