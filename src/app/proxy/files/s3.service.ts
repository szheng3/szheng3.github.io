import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';
import type {IFormFile} from '../microsoft/asp-net-core/http/models';
import type {IActionResult} from '../microsoft/asp-net-core/mvc/models';
import type {ImageDto} from '../resumes/models';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  apiName = 'Default';


  getImage = (size: string, key: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
        method: 'GET',
        url: `/api/app/public/${size}/${key}`,
      },
      {apiName: this.apiName, ...config});


  uploadImage = (file: IFormFile, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImageDto>({
        method: 'POST',
        url: '/api/app/public/image/upload',
        body: file,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
