import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Event } from 'src/event/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Event])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
