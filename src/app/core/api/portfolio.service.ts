import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getUrlParam } from 'src/app/share/util/APIUtil';
import {
  ICatalogue,
  IPortfolio,
  IPortfolios,
  ISkill
} from 'src/app/share/response/portfolio';
import { CreatePortfolioRequest } from 'src/app/share/request/portfolio';

export interface IPortfolioParam {
  index?: boolean;
  current?: number;
  size?: number;
  isCount?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly url: string = environment.domain;

  constructor(private http: HttpClient) {}

  getPortfolios(param: IPortfolioParam) {
    return this.http.get<IPortfolios>(getUrlParam(this.url + '/portfolio', param));
  }

  getSkills() {
    return this.http.get<ISkill[]>(getUrlParam(this.url + '/skills'));
  }

  getCatalogues() {
    return this.http.get<ICatalogue[]>(getUrlParam(this.url + '/catalogues'));
  }

  getPortfolio(id: number) {
    return this.http.get<IPortfolio>(getUrlParam(this.url + '/portfolio/' + id));
  }
  deletePortfolio(id: number) {
    return this.http.post(getUrlParam(this.url + '/delete/portfolio/' + id), {});
  }

  createPortfolio(body: CreatePortfolioRequest) {
    return this.http.post<IPortfolio>(getUrlParam(this.url + '/create/portfolio'), body);
  }
  postImage(body: any) {
    return this.http.post<IPortfolio>(getUrlParam(this.url + '/uploadImage'), body);
  }
}
