import { Module } from '@nestjs/common';
import { AssociationMembersController } from './association-members.controller';
import { AssociationMembers } from './association-member.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationMembersService } from './association-members.service';

@Module({
  imports: [TypeOrmModule.forFeature([AssociationMembers])],
  controllers: [AssociationMembersController],
  providers: [AssociationMembersService],
})
export class AssociationMembersModule {}
