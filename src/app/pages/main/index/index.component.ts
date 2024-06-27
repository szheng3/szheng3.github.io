import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {PortfolioService} from "~/core/api/portfolio.service";
import {delay, tap} from "rxjs/operators";
import {LoadingService} from "~/core/util/loading.service";
import {isPlatformBrowser} from "@angular/common";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  isLoading = this.loadingService.isLoadingState();
  isBrowser: boolean;

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

  }


  ngOnInit() {

    this.portfolioService.getPortfolios({
      sorting: "creationTime DESC",
      IncludeDetails: true, Filter: {isHot: true}, SkipCount: 0, MaxResultCount: 6,
    }).pipe(
      delay(1),
      tap(x => gallery()
      )).subscribe();

  }

  ngAfterViewInit(): void {

  }
}
