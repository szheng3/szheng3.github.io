import type {CatalogueDto, CreateUpdateCatalogueDto} from './models';
import type {ListResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiName = 'Default';


  create = (input: CreateUpdateCatalogueDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatalogueDto>({
        method: 'POST',
        url: '/api/app/category',
        body: input,
      },
      {apiName: this.apiName, ...config});


  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/category/${id}`,
      },
      {apiName: this.apiName, ...config});


  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatalogueDto>({
        method: 'GET',
        url: `/api/app/category/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<CatalogueDto>>({
        method: 'GET',
        url: '/api/app/category',
      },
      {apiName: this.apiName, ...config});


  update = (id: number, input: CreateUpdateCatalogueDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatalogueDto>({
        method: 'PUT',
        url: `/api/app/category/${id}`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
