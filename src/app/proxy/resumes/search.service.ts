import type {BlogDto} from './models';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiName = 'Default';


  searchBlogs = (query: string, limit: number = 5, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogDto[]>({
        method: 'POST',
        url: '/api/app/search/search-blogs',
        params: {query, limit},
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
