import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/event.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
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

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
