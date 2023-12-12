import { CreateObject } from '../../infra/helpers/create-object';
import { IRole } from '../interfaces/role.interface';

export class Role implements IRole {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  static clone(data: IRole): Role {
    const role = CreateObject<Role>(Role, data);
    return role;
  }
}
