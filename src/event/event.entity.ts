import { Association } from 'src/association/association.entity';
import {
  Column,
  Entity,
  JoinColumn,
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

  @ManyToOne(() => Association, (association) => association.id)
  @JoinColumn({ name: 'association_id' })
  association: Association;
}
