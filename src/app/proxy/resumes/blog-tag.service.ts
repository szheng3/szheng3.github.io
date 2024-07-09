import type {BlogTagDto, CreateUpdateBlogTagDto} from './models';
import type {PagedAndSortedResultRequestDto, PagedResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogTagService {
  apiName = 'Default';


  create = (input: CreateUpdateBlogTagDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogTagDto>({
        method: 'POST',
        url: '/api/app/blog-tag',
        body: input,
      },
      {apiName: this.apiName, ...config});


  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/blog-tag/${id}`,
      },
      {apiName: this.apiName, ...config});


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogTagDto>({
        method: 'GET',
        url: `/api/app/blog-tag/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogTagDto>>({
        method: 'GET',
        url: '/api/app/blog-tag',
        params: {sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount},
      },
      {apiName: this.apiName, ...config});


  update = (id: string, input: CreateUpdateBlogTagDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogTagDto>({
        method: 'PUT',
        url: `/api/app/blog-tag/${id}`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
