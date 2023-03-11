import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {getUrlParam} from 'src/app/share/util/APIUtil';

import {ICatalogue, IPortfolio, IPortfolios, ISkill} from 'src/app/share/response/portfolio';
import {CreatePortfolioRequest} from 'src/app/share/request/portfolio';
import {map, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IPortfolioDetails} from "~/pages/main/portfolio-details/portfolio-details.component";
import moment from "moment";

export interface IPortfolioParam {
  index?: boolean;
  current?: number;
  size?: number;
  isCount?: boolean;
}

export interface ICards {
  id: number;
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


  private _portfolios: Subject<IPortfolios> = new BehaviorSubject<IPortfolios>({records: []});
  private _portfolio: Subject<IPortfolio> = new BehaviorSubject<IPortfolio>({});

  portfolios$: Observable<IPortfolios> = this._portfolios.asObservable();

  portfolio$: Observable<IPortfolio> = this._portfolio.asObservable();


  constructor(private http: HttpClient) {
  }

  getPortfolios(param: IPortfolioParam) {


    return this.http.get<IPortfolios>('/portfolio', {params: param as HttpParams})
      .pipe(
        tap((value: IPortfolios) => this._portfolios.next(value))
      );
  }

  getICards(): Observable<ICards[]> {
    return this.portfolios$.pipe(map(portfolios => portfolios?.records?.map(({
                                                                               idPortfolio,
                                                                               title,
                                                                               summary,
                                                                               links,
                                                                               images,
                                                                               catalogues,
                                                                               createDate
                                                                             }) => ({
      id: idPortfolio,
      title,
      description: summary,
      url: links
        .filter(({linkType}) => linkType === 'WEB')
        .map(({linkDetails}) => linkDetails)
        .pop(),
      gitLink: links
        .filter(({linkType}) => linkType === 'GIT')
        .map(({linkDetails}) => linkDetails)
        .pop(),
      videosLink: links
        .filter(({linkType}) => linkType === 'YOUTUBE')
        .map(({linkDetails}) => linkDetails)
        .pop(),
      image: images.map(({path}) => path).pop(),
      tags: catalogues.map(({name}) => name),
      createDate
    }))));
  }

  public getPortfolioDetails(): Observable<IPortfolioDetails> {
    return this.portfolio$.pipe(map(portfolio => {
      const {client, createDate} = portfolio?.portfolio || {};


      return {
        client,
        createDate: moment(createDate).format('D MMM YYYY'),
        imageSrc: portfolio?.images?.map(value => value.path).pop(),
        skills: portfolio?.skills?.map(value => value.name),
        content: portfolio?.portfolio?.content,
        title: portfolio?.portfolio?.title,
        links: portfolio.links
      };

    }));


  }

  getSkills() {
    return this.http.get<ISkill[]>(getUrlParam({uri: '/skills'}));
  }

  getCatalogues() {
    return this.http.get<ICatalogue[]>(getUrlParam({uri: '/catalogues'}));
  }

  getPortfolio(id: number) {
    return this.http.get<IPortfolio>('/portfolio/' + id).pipe(tap((value: IPortfolio) => this._portfolio.next(value)));
  }

  deletePortfolio(id: number) {
    return this.http.post(getUrlParam({uri: '/delete/portfolio/' + id}), {});
  }

  createPortfolio(body: CreatePortfolioRequest) {
    return this.http.post<IPortfolio>(getUrlParam({uri: '/create/portfolio'}), body);
  }

  postImage(body: any) {
    return this.http.post<IPortfolio>(getUrlParam({uri: '/uploadImage'}), body);
  }
}
