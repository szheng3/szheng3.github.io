import type {CreateUpdateSkillDto, SkillDto} from './models';
import type {ListResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiName = 'Default';


  create = (input: CreateUpdateSkillDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SkillDto>({
        method: 'POST',
        url: '/api/app/skill',
        body: input,
      },
      {apiName: this.apiName, ...config});


  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/skill/${id}`,
      },
      {apiName: this.apiName, ...config});


  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SkillDto>({
        method: 'GET',
        url: `/api/app/skill/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<SkillDto>>({
        method: 'GET',
        url: '/api/app/skill',
      },
      {apiName: this.apiName, ...config});


  update = (id: number, input: CreateUpdateSkillDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SkillDto>({
        method: 'PUT',
        url: `/api/app/skill/${id}`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
