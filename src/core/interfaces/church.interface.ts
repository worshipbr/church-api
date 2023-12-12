import { IUser } from './user.interface';

export interface IChurch {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser[];
}
