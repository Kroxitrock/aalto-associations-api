import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { mapToUpcomingEventDto, UpcomingEventDto } from './upcoming-event.dto';
import {
  AssociationMembers,
  AssociationRole,
} from '../association-members/association-member.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(AssociationMembers)
    private associationMembersRepository: Repository<AssociationMembers>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  finAllUpcomingEventsOfAssociationsOfUser(
    userId: number,
  ): Promise<UpcomingEventDto[]> {
    return this.eventRepository
      .createQueryBuilder('event')
      .leftJoinAndSelect('event.association', 'association')
      .innerJoin('association.users', 'user')
      .leftJoin('event.participants', 'eventUser')
      .addSelect(
        'CASE WHEN MAX(CASE WHEN eventUser.id = :userId THEN 1 ELSE 0 END) = 1 THEN TRUE ELSE FALSE END',
        'joined',
      )
      .addSelect('COUNT(eventUser.id)', 'participants')
      .where('user.id = :userId', { userId })
      .andWhere('event.date >= :currentDate', {
        currentDate: new Date().toISOString(),
      })
      .groupBy('event.id')
      .addGroupBy('association.id')
      .orderBy('event.date', 'ASC')
      .getRawMany()
      .then((rawElements) => rawElements.map(mapToUpcomingEventDto));
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async roleForAssociation(
    userId: number,
    associationId: number,
  ): Promise<AssociationRole | 'NONE'> {
    return this.associationMembersRepository
      .findOneBy({
        association: { id: associationId },
        user: { id: userId },
      })
      .then((associationMember) => associationMember?.role ?? 'NONE');
  }
}
