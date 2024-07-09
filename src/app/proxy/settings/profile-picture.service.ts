import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';
import type {IFormFile} from '../microsoft/asp-net-core/http/models';
import type {IActionResult} from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ProfilePictureService {
  apiName = 'Default';


  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
        method: 'GET',
        url: '/api/app/profile-picture',
      },
      {apiName: this.apiName, ...config});


  upload = (file: IFormFile, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
        method: 'POST',
        responseType: 'text',
        url: '/api/app/profile-picture/upload',
        body: file,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
