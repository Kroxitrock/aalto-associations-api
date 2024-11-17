import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventService],
  controllers: [EventController],
})
export class EventModule {}
