import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import { AssociationMembers } from 'src/association-members/association-member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Association, AssociationMembers, User]),
  ],
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
