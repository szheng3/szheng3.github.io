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
  size = 9;


  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService) {
  }

  ngOnInit() {
    this.portfolioService.getPortfolios({current: this.current, size: this.size}).pipe(
      delay(1),
      tap(x => gallery())).subscribe();

  }


  viewMore() {
    this.size = this.size + 9;
    this.portfolioService.getPortfolios({current: this.current, size: this.size}).pipe(
      tap(x => gallery())).subscribe();

  }
}
