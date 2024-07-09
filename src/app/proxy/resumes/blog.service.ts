import type {BlogDto, CreateUpdateBlogDto} from './models';
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


  getListByFilter = (input: PagedAndFilteredResultRequestDto<BlogDto>, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogDto>>({
        method: 'GET',
        url: '/api/app/blog/by-filter',
        params: {
          includeDetails: input.includeDetails,
          ["Filter.Id"]: input.filter.id,
          ["Filter.Title"]: input.filter.title,
          ["Filter.Context"]: input.filter.context,
          ["Filter.ContextType"]: input.filter.contextType,
          ["Filter.ViewCount"]: input.filter.viewCount,
          ["Filter.CommentsCount"]: input.filter.commentsCount,
          ["Filter.Images"]: input.filter.images,
          ["Filter.Categories"]: input.filter.categories,
          ["Filter.Tags"]: input.filter.tags,
          ["Filter.CreationTime"]: input.filter.creationTime,
          ["Filter.LastModificationTime"]: input.filter.lastModificationTime,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount
        },
      },
      {apiName: this.apiName, ...config});


  incrementViewCount = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'POST',
        url: `/api/app/blog/${id}/increment-view-count`,
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
