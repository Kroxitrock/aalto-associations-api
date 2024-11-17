import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
