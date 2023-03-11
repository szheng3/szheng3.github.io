import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../../../../../environments/environment.prod";
import {ICards, PortfolioService} from "../../../../core/api/portfolio.service";

enum HttpAction {
  GetPortfolios,
  DeletePortfolio
}


@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  col = 3;
  domain: string = 'http://' + new URL(environment.domain).hostname;

  cards$: Observable<ICards[]> = this.portfolioService.getICards();


  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {

  }


}
