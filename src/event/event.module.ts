import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User])],
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
