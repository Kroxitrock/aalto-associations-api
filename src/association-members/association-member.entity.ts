import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AssociationMembers {
  @PrimaryGeneratedColumn()
  user_id: number;

  @PrimaryGeneratedColumn()
  association_id: number;

  @Column()
  role: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Association, (association) => association.id)
  @JoinColumn({ name: 'association_id' })
  association: Association;
}
