import { Test, TestingModule } from '@nestjs/testing';
import { EventRequestService } from './event-request.service';

describe('EventRequestService', () => {
  let service: EventRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventRequestService],
    }).compile();

    service = module.get<EventRequestService>(EventRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
