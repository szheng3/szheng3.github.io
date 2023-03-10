import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {getUrlParam} from 'src/app/share/util/APIUtil';
import {ILoginResponse} from 'src/app/share/response/user';

export interface ILogin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = environment.domain;

  constructor(private http: HttpClient) {}

  login(body: ILogin) {
    return this.http.post<ILoginResponse>(getUrlParam({uri: this.url + '/login', obj: {}}), body);
  }
}
