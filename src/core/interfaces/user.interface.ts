import { IChurch } from './church.interface';
import { IRole } from './role.interface';

export interface IUser {
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
  church?: IChurch;
  role: IRole;
}
