import {ILogin} from 'src/app/core/api/user.service';

export class UserLogin {
  public static readonly type = '[User] Login';
  constructor(public payload: ILogin) {}
}
