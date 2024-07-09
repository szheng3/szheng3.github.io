import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {IPortfolio, IPortfolios} from 'src/app/share/response/portfolio';
import {map, tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {IPortfolioDetails} from "~/pages/main/portfolio-details/portfolio-details.component";
import moment from "moment";
import {convertToHttpParams} from "~/core/util/convert";

export interface IPortfolioParam {
  IncludeDetails?: boolean;
  Filter?: IPortfolio;
  SkipCount?: number;
  MaxResultCount?: number;
  isCount?: boolean;
}

export interface ICards {
  id?: number;
  title?: string;
  description?: string;
  url?: string;
  gitLink?: string;
  videosLink?: string;
  image?: string;
  tags?: string[];
  createDate?: string;
}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private _portfolios: BehaviorSubject<IPortfolios> = new BehaviorSubject<IPortfolios>({items: []});
  private _portfolio: BehaviorSubject<IPortfolio> = new BehaviorSubject<IPortfolio>({});

  portfolios$: Observable<IPortfolios> = this._portfolios.asObservable();
  portfolio$: Observable<IPortfolio> = this._portfolio.asObservable();

  constructor(private http: HttpClient) {
  }

  getPortfolios(param: {
    MaxResultCount: number;
    IncludeDetails: boolean;
    sorting: string;
    SkipCount: number;
    Filter?: IPortfolio
  }) {
    return this.http.get<IPortfolios>('/api/app/portfolio', {params: convertToHttpParams(param) as HttpParams})
      .pipe(
        tap((value: IPortfolios) => this._portfolios.next(value))
      );
  }

  getICards(): Observable<ICards[]> {

    return this.portfolios$.pipe(map(portfolios => portfolios?.items?.map((portfolio: IPortfolio) => ({
      id: portfolio.id || 0,
      title: portfolio.title,
      description: portfolio.summary,
      url: portfolio.portfolioLinks?.find(link => link.linkType === 'web')?.linkDetails,
      gitLink: portfolio.portfolioLinks?.find(link => link.linkType === 'git')?.linkDetails,
      videosLink: portfolio.portfolioLinks?.find(link => link.linkType === 'youtube')?.linkDetails,
      image: portfolio.images?.[0]?.path, // Assuming you want the first image
      tags: portfolio.catalogues?.map(cat => cat.name),
      createDate: portfolio.creationTime
    }))));
  }

  public getPortfolioDetails(): Observable<IPortfolioDetails> {
    return this.portfolio$.pipe(map(portfolio => {
      return {
        client: portfolio.client,
        createDate: moment(portfolio.creationTime).format('D MMM YYYY'),
        imageSrc: portfolio.images?.[0]?.path, // Assuming you want the first image
        skills: portfolio.skills?.map(skill => skill.name),
        content: portfolio.content,
        title: portfolio.title,
        links: portfolio.portfolioLinks,
        contentType: portfolio.contentType
      };
    }));
  }

  // getSkills() {
  //   return this.http.get<ISkill[]>(getUrlParam({uri: '/skills'}));
  // }
  //
  // getCatalogues() {
  //   return this.http.get<ICatalogue[]>(getUrlParam({uri: '/catalogues'}));
  // }

  getPortfolio(id: number) {
    return this.http.get<IPortfolio>('/api/app/portfolio/' + id).pipe(tap((value: IPortfolio) => this._portfolio.next(value)));
  }

  // deletePortfolio(id: number) {
  //   return this.http.post(getUrlParam({uri: '/delete/portfolio/' + id}), {});
  // }
  //
  // createPortfolio(body: CreatePortfolioRequest) {
  //   return this.http.post<IPortfolio>(getUrlParam({uri: '/create/portfolio'}), body);
  // }
  //
  // postImage(body: any) {
  //   return this.http.post<IPortfolio>(getUrlParam({uri: '/uploadImage'}), body);
  // }
}
