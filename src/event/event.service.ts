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

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
