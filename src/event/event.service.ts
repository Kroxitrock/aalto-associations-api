import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(id: number): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  findByAssociationId(associationId: number): Promise<Event[]> {
    return this.eventRepository.findBy({ association: { id: associationId } });
  }

  async addParticipant(eventId: number, userId: number) {
    this.eventRepository.findOneBy({ id: eventId }).then((event) => {
      if (!event) {
        throw new NotFoundException(`Event with ID ${eventId} not found.`);
      }

      this.userRepository.findOneBy({ id: userId }).then((user) => {
        if (!user) {
          throw new NotFoundException(`Event with ID ${userId} not found.`);
        }
        event.participants.push(user);
        this.eventRepository.save(event);
      });
    });
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
