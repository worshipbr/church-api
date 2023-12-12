import { CreateObject } from '../../infra/helpers/create-object';
import { IUser } from '../interfaces/user.interface';
import { Church } from './church';
import { Role } from './role';

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  logo: string;
  active: boolean;
  churchId: number;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
  church?: Church;
  role: Role;

  static clone(data: IUser): User {
    const user = CreateObject<User>(User, data);
    if (data.church) {
      user.church = Church.clone(data.church);
    }
    if (data.role) {
      user.role = Role.clone(data.role);
    }
    return user;
  }
}
