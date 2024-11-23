import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AssociationMembers,
  AssociationRole,
} from 'src/association-members/association-member.entity';
import { Association } from 'src/association/association.entity';
import { Event } from 'src/event/event.entity';
import {
  mapToUpcomingEventDto,
  UpcomingEventDto,
} from 'src/user/upcoming-event.dto';
import { User } from 'src/user/user.entity';
import { Equal, Repository } from 'typeorm';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
    @InjectRepository(AssociationMembers)
    private associationMemberRepository: Repository<AssociationMembers>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(id: number): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  findByAssociationId(
    associationId: number,
    userId: number,
  ): Promise<UpcomingEventDto[]> {
    return this.eventRepository
      .createQueryBuilder('event')
      .leftJoin('event.participants', 'eventUser')
      .addSelect('COUNT(eventUser.id)', 'participants')
      .addSelect(
        'CASE WHEN MAX(CASE WHEN eventUser.id = :userId THEN 1 ELSE 0 END) = 1 THEN TRUE ELSE FALSE END',
        'joined',
      )
      .where('event.association.id = :associationId', { associationId })
      .andWhere('event.date >= :currentDate', {
        currentDate: new Date().toISOString(),
      })
      .groupBy('event.id')
      .orderBy('event.date', 'ASC')
      .setParameters({ userId })
      .getRawMany()
      .then((rawElements) => rawElements.map(mapToUpcomingEventDto));
  }

  async addParticipant(eventId: number, userId: number) {
    const event = await this.eventRepository.findOneBy({ id: eventId });
    if (!event) {
      throw new NotFoundException(`Event with ID ${eventId} not found.`);
    }
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`Event with ID ${userId} not found.`);
    }
    const participants = await event.participants;
    participants.push(user);
    await this.eventRepository.save(event);
  }

  //TODO: Date time is not saved in the db, probably backend issue
  async create(event: Event) {
    const association = await this.associationRepository.findOneBy({
      id: event.association.id,
    });
    event.association = association;
    await this.eventRepository.save(event);
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }

  validateUserIsLeaderOfAssociation(userId: number, associationId: number) {
    const isLeader = this.associationMemberRepository.existsBy({
      association: {
        id: associationId,
      },
      user: {
        id: userId,
      },
      role: Equal(AssociationRole.LEADER),
    });

    if (!isLeader) {
      throw new UnauthorizedException(
        'The logged in user does not have the required role, to create events for this association!',
      );
    }
  }
}
