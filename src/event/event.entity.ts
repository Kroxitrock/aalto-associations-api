import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  price: number;

  @Column()
  capacity: number;

  @ManyToOne(() => Association, (association) => association.id, {
    eager: true,
  })
  @JoinColumn({ name: 'association_id' })
  association: Association;

  @ManyToMany(() => User, { lazy: true })
  @JoinTable({
    name: 'users_events',
    joinColumn: { name: 'event_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  participants: User[];
}
