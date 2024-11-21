import { Event } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Association {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  description: string;

  @Column()
  telegram: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  membership_fee: number;

  @OneToMany(() => Event, (event) => event.association, { lazy: true })
  events: Event[];

  @ManyToMany(() => User, { lazy: true })
  @JoinTable({
    name: 'association_members',
    joinColumn: { name: 'association_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  users: User[];
}
