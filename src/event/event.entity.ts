import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
