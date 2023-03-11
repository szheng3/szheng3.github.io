import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Link} from '~/share/response/portfolio';
import {isPlatformBrowser} from '@angular/common';
import {PortfolioService} from "~/core/api/portfolio.service";
import {LoadingService} from "~/core/util/loading.service";
import {switchMap} from 'rxjs/operators';

export interface IPortfolioDetails {
  imageSrc?: string;
  createDate?: string;
  skills?: string[];
  client?: string;
  title?: string;
  content?: string;
  links?: Link[];
}

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  // @Select(PortfolioState.getPortfolioDetails)
  detail$: Observable<IPortfolioDetails> = this.portfolioService.getPortfolioDetails()
  isBrowser: boolean;

  constructor(public loadingService: LoadingService, public portfolioService: PortfolioService, private route: ActivatedRoute, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(
      source => {
        return this.portfolioService.getPortfolio(+source['id'])
      }
    )).subscribe();
  }

  // onImgLoad(e) {
  //   console.log('High quality image loaded?', e.loaded);
  // }
  //
  // onThumbLoad(e) {
  //   console.log('Low qaulity thumbnail loaded?', e.loaded);
  // }
}
