import { User } from 'src/user/user.entity';
import { Event } from 'src/event/event.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EventRequest {
  @PrimaryGeneratedColumn()
  user_id: number;

  @PrimaryGeneratedColumn()
  event_id: number;

  @Column()
  creationg_date: Date;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Event, (event) => event.id)
  @JoinColumn({ name: 'event_id' })
  event: Event;
}
