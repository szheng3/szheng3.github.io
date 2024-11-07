import type {BlogDto, BlogFilterDto, CreateUpdateBlogDto} from './models';
import type {PagedAndSortedResultRequestDto, PagedResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';
import type {PagedAndFilteredResultRequestDto} from '../models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiName = 'Default';


  create = (input: CreateUpdateBlogDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogDto>({
        method: 'POST',
        url: '/api/app/blog',
        body: input,
      },
      {apiName: this.apiName, ...config});


  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/blog/${id}`,
      },
      {apiName: this.apiName, ...config});


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogDto>({
        method: 'GET',
        url: `/api/app/blog/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogDto>>({
        method: 'GET',
        url: '/api/app/blog',
        params: {sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount},
      },
      {apiName: this.apiName, ...config});


  getListByFilter = (parameter: PagedAndFilteredResultRequestDto<BlogFilterDto>, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogDto>>({
        method: 'GET',
        url: '/api/app/blog/by-filter',
        params: {
          includeDetails: parameter.includeDetails,
          ["Filter.SearchTerm"]: parameter.filter.searchTerm,
          ["Filter.SearchMode"]: parameter.filter.searchMode,
          ["Filter.Title"]: parameter.filter.title,
          ["Filter.CategoryNames"]: parameter.filter.categoryNames,
          ["Filter.TagNames"]: parameter.filter.tagNames,
          ["Filter.Sorting"]: parameter.filter.sorting,
          ["Filter.SkipCount"]: parameter.filter.skipCount,
          ["Filter.MaxResultCount"]: parameter.filter.maxResultCount,
          sorting: parameter.sorting,
          skipCount: parameter.skipCount,
          maxResultCount: parameter.maxResultCount
        },
      },
      {apiName: this.apiName, ...config});


  update = (id: string, input: CreateUpdateBlogDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogDto>({
        method: 'PUT',
        url: `/api/app/blog/${id}`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
