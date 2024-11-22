import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => User, { lazy: true })
  @JoinTable({
    name: 'association_members',
    joinColumn: { name: 'association_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  users: User[];
}
