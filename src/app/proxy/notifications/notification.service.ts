import type {EmailInputDto} from './models';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  apiName = 'Default';


  send = (input: EmailInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'POST',
        url: '/api/app/notification/send',
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
