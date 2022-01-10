import { IUser } from 'src/app/shared/typings/interfaces/user.interface';

export interface ISession {
  token: string;
  user: IUser;
}
