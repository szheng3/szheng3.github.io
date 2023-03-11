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
  tags: string[] = [];
  col = 3;
  domain: string = "";

  cards$: Observable<ICards[]> = this.portfolioService.getICards();


  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.domain = 'http://' + new URL(environment.domain).hostname;
    // this.tags = _(this.cards)
    //   .flatMap(value => value.tags)
    //   .map(value => value.toLowerCase())
    //   .uniq()
    //   .value();
  }


}
