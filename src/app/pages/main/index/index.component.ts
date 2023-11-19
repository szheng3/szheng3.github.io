import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PortfolioService} from "~/core/api/portfolio.service";
import {delay, tap} from "rxjs/operators";
import {LoadingService} from "~/core/util/loading.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  isLoading = this.loadingService.isLoadingState();

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService) {
  }


  ngOnInit() {

    this.portfolioService.getPortfolios({IncludeDetails:true,Filter:{isHot:true},SkipCount: 0, MaxResultCount: 6}).pipe(
      delay(1),
      tap(x => gallery()
      )).subscribe();

  }

  ngAfterViewInit(): void {

  }
}
