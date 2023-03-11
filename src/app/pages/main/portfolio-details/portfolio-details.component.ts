import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Link} from '~/share/response/portfolio';
import {isPlatformBrowser} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {StoreService} from "~/core/store.service";

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
  detail$: Observable<IPortfolioDetails> = this.storeService.portfolioService.getPortfolioDetails()
  isLoading = this.storeService.loadingService.isLoadingState();
  isBrowser: boolean;

  constructor(public storeService: StoreService, private route: ActivatedRoute, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(
      source => {
        return this.storeService.portfolioService.getPortfolio(+source['id'])
      }
    )).subscribe();
  }

}
