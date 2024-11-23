import { Association } from 'src/association/association.entity';
import { Event } from 'src/event/event.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => Association, { lazy: true })
  @JoinTable({
    name: 'association_members',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'association_id', referencedColumnName: 'id' },
  })
  associations: Association[];

  @ManyToMany(() => Event, { lazy: true })
  @JoinTable({
    name: 'users_events',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'event_id', referencedColumnName: 'id' },
  })
  events: Event[];
}
