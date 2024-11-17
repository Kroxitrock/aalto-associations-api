import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventRequest } from './event-request.entity';

@Injectable()
export class EventRequestService {
  constructor(
    @InjectRepository(EventRequest)
    private eventRequestRepository: Repository<EventRequest>,
  ) {}

  findAll(): Promise<EventRequest[]> {
    return this.eventRequestRepository.find();
  }

  findOneByUserAndEvent(
    user_id: number,
    event_id: number,
  ): Promise<EventRequest | null> {
    return this.eventRequestRepository.findOneBy({ user_id, event_id });
  }

  async remove(id: number): Promise<void> {
    await this.eventRequestRepository.delete(id);
  }
}
