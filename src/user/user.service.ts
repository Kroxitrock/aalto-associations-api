import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import { Equal, In, MoreThan, Repository } from 'typeorm';
import { mapToUpcomingEventDto, UpcomingEventDto } from './upcoming-event.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
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
      .leftJoin('event.users', 'eventUser', 'eventUser.id = :userId', {
        userId,
      })
      .where('user.id = :userId', { userId })
      .andWhere('event.date >= :currentDate', {
        currentDate: new Date().toISOString(),
      })
      .addSelect(
        'CASE WHEN eventUser.id IS NOT NULL THEN true ELSE false END',
        'joined',
      )
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
}
