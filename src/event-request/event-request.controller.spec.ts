import { Test, TestingModule } from '@nestjs/testing';
import { EventRequestController } from './event-request.controller';

describe('EventRequestController', () => {
  let controller: EventRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventRequestController],
    }).compile();

    controller = module.get<EventRequestController>(EventRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
