import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
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
  tags: string[]=[];
  col = 3;
  domain: string="";

  cards$: Observable<ICards[]>=this.portfolioService.getICards();
  // getPortfolios$: Observable<any>;

  constructor(private portfolioService:PortfolioService) {}

  ngOnInit() {
    this.domain = 'http://'+new URL(environment.domain).hostname;
    // this.tags = _(this.cards)
    //   .flatMap(value => value.tags)
    //   .map(value => value.toLowerCase())
    //   .uniq()
    //   .value();
  }

  // _http(param: any, httpAction: HttpAction = HttpAction.GetPortfolios) {
  //   switch (httpAction) {
  //     case HttpAction.GetPortfolios:
  //       this.getPortfolios$ = this.store.dispatch([new GetPortfoliosAction({ current: (param - 1) * 8, size: 8, isCount: true })]);
  //       break;
  //     case HttpAction.DeletePortfolio:
  //       this.getPortfolios$ = this.store.dispatch(new DeletePortfolioAction(param));
  //   }

  // }
}
