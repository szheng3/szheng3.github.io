import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {LoadingService} from "../../../core/util/loading.service";
import {delay, tap} from "rxjs/operators";
import {PortfolioService} from "../../../core/api/portfolio.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  current = 0;
  size = 6;
  isBrowser: boolean;

  isLoading = this.loadingService.isLoadingState();

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

  }

  ngOnInit() {
    this.portfolioService.getPortfolios({SkipCount: this.current, MaxResultCount: this.size,IncludeDetails:true,sorting: "creationTime DESC"}).pipe(
      delay(1),
      tap(x => this.isBrowser && gallery())).subscribe();

  }


  viewMore() {
    this.size = this.size + 6;
    this.portfolioService.getPortfolios({SkipCount: this.current, MaxResultCount: this.size, IncludeDetails: true,sorting: "creationTime DESC"}).pipe(
      tap(x => this.isBrowser && gallery())).subscribe();

  }
}
