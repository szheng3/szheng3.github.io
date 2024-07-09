import type {BlogCategoryDto, CreateUpdateBlogCategoryDto} from './models';
import type {PagedAndSortedResultRequestDto, PagedResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogCategoryService {
  apiName = 'Default';


  create = (input: CreateUpdateBlogCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogCategoryDto>({
        method: 'POST',
        url: '/api/app/blog-category',
        body: input,
      },
      {apiName: this.apiName, ...config});


  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/blog-category/${id}`,
      },
      {apiName: this.apiName, ...config});


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogCategoryDto>({
        method: 'GET',
        url: `/api/app/blog-category/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogCategoryDto>>({
        method: 'GET',
        url: '/api/app/blog-category',
        params: {sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount},
      },
      {apiName: this.apiName, ...config});


  update = (id: string, input: CreateUpdateBlogCategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogCategoryDto>({
        method: 'PUT',
        url: `/api/app/blog-category/${id}`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
