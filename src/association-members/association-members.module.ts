import { Module } from '@nestjs/common';
import { AssociationMembers } from './association-member.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationMembersService } from './association-members.service';

@Module({
  imports: [TypeOrmModule.forFeature([AssociationMembers])],
  providers: [AssociationMembersService],
})
export class AssociationMembersModule {}
