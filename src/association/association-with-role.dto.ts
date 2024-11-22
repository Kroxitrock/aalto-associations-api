import { AssociationRole } from 'src/association-members/association-member.entity';
import { User } from 'src/user/user.entity';

export default interface AssociationWithRoleDto {
  id: number;
  name: string;
  logo: string;
  description: string;
  telegram: string;
  phone: string;
  email: string;
  membership_fee: number;
  users: User[];
  role: AssociationRole;
}

// export function mapToAssociationWithRoleDro(
//   association: any,
// ): AssociationWithRoleDto {
//   return {
//     id: association.id,
//     name: association.name,
//     logo: association.logo,
//     description: association.description,
//     telegram: association.telegram,
//     phone: association.phone,
//     email: association.email,
//     membership_fee: association.membership_fee,
//   };
// }
