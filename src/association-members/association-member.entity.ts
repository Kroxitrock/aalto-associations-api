import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

export enum AssociationRole {
  MEMBER = 'MEMBER',
  LEADER = 'LEADER',
}
@Entity()
export class AssociationMembers {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  association_id: number;

  @Column({ type: 'enum', enum: AssociationRole })
  role: AssociationRole;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Association, (association) => association.id)
  @JoinColumn({ name: 'association_id' })
  association: Association;
}
