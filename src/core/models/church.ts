import { CreateObject } from '../../infra/helpers/create-object';
import { IChurch } from '../interfaces/church.interface';
import { User } from './user';

export class Church implements IChurch {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  user: User[];

  static clone(data: IChurch) {
    const church = CreateObject<Church>(Church, data);

    if (data.user?.length) {
      church.user = data.user.map((u) => User.clone(u));
    }

    return church;
  }
}
