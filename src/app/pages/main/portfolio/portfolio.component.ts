import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../../core/util/loading.service";
import {delay, tap} from "rxjs/operators";
import {PortfolioService} from "../../../core/api/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  current = 0;
  size = 6;

  isLoading = this.loadingService.isLoadingState();

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService) {
  }

  ngOnInit() {
    this.portfolioService.getPortfolios({SkipCount: this.current, MaxResultCount: this.size,IncludeDetails:true,sorting: "creationTime DESC"}).pipe(
      delay(1),
      tap(x => gallery())).subscribe();

  }


  viewMore() {
    this.size = this.size + 6;
    this.portfolioService.getPortfolios({SkipCount: this.current, MaxResultCount: this.size, IncludeDetails: true,sorting: "creationTime DESC"}).pipe(
      tap(x => gallery())).subscribe();

  }
}
