import {Action, Selector, State, StateContext} from '@ngxs/store';
import {UserLogin} from 'src/store/user/user.actions';
import {UserService} from 'src/app/core/api/user.service';
import {tap} from 'rxjs/operators';
import {ILoginResponse} from 'src/app/share/response/user';
import {CookieService} from 'ngx-cookie-service';
import {Injectable} from '@angular/core';

export interface UserStateModel {
  items: string[];
  auth?: ILoginResponse;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    items: []
  }
})
@Injectable()
export class UserState {
  constructor(private userService: UserService, private cookieService: CookieService) {}

  @Selector()
  public static getState(state: UserStateModel) {
    return state;
  }

  @Action(UserLogin)
  public login({ patchState }: StateContext<UserStateModel>, { payload }: UserLogin) {
    return this.userService.login(payload).pipe(
      tap(auth => {
        this.cookieService.set('token', auth.access_token);
        patchState({ auth });
      })
    );
  }
}
