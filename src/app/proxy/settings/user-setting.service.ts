import type {UserSettingDto, UserSettingUpdateDto} from './models';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSettingService {
  apiName = 'Default';


  getByUserId = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserSettingDto>({
        method: 'GET',
        url: '/api/app/user-setting/by-user-id',
      },
      {apiName: this.apiName, ...config});


  updateUserSetting = (input: UserSettingUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserSettingDto>({
        method: 'PUT',
        url: '/api/app/user-setting/user-setting',
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
