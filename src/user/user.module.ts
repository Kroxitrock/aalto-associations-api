import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Event } from 'src/event/event.entity';
import { AssociationMembers } from 'src/association-members/association-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Event, AssociationMembers])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
