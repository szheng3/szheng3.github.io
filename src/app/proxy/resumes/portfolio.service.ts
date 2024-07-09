import type {PortfolioDto} from './models';
import type {PagedResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';
import type {PagedAndFilteredResultRequestDto} from '../models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  apiName = 'Default';


  createPortfolio = (input: PortfolioDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PortfolioDto>({
        method: 'POST',
        url: '/api/app/portfolio/portfolio',
        body: input,
      },
      {apiName: this.apiName, ...config});


  deletePortfolio = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: `/api/app/portfolio/${id}/portfolio`,
      },
      {apiName: this.apiName, ...config});


  deletePortfolios = (ids: number[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
        method: 'DELETE',
        url: '/api/app/portfolio/portfolios',
        params: {ids},
      },
      {apiName: this.apiName, ...config});


  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PortfolioDto>({
        method: 'GET',
        url: `/api/app/portfolio/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (input: PagedAndFilteredResultRequestDto<PortfolioDto>, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PortfolioDto>>({
        method: 'GET',
        url: '/api/app/portfolio',
        params: {
          includeDetails: input.includeDetails,
          ["Filter.IsHot"]: input.filter.isHot,
          ["Filter.Title"]: input.filter.title,
          ["Filter.Summary"]: input.filter.summary,
          ["Filter.Client"]: input.filter.client,
          ["Filter.Content"]: input.filter.content,
          ["Filter.ContentType"]: input.filter.contentType,
          ["Filter.Rank"]: input.filter.rank,
          ["Filter.Catalogues"]: input.filter.catalogues,
          ["Filter.Images"]: input.filter.images,
          ["Filter.Skills"]: input.filter.skills,
          ["Filter.PortfolioLinks"]: input.filter.portfolioLinks,
          ["Filter.Id"]: input.filter.id,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount
        },
      },
      {apiName: this.apiName, ...config});


  updatePortfolio = (id: number, input: PortfolioDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PortfolioDto>({
        method: 'PUT',
        url: `/api/app/portfolio/${id}/portfolio`,
        body: input,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
