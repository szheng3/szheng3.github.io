import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {PortfolioState} from 'src/store/portfolio/portfolio.state';
import {Observable} from 'rxjs';
import {environment} from "../../../../../environments/environment.prod";

enum HttpAction {
  GetPortfolios,
  DeletePortfolio
}

export interface ICards {
  id: number;
  title?: string;
  description?: string;
  url?: string;
  gitLink?: string;
  videosLink?: string;
  image?: string;
  tags?: string[];
  createDate?: string;
}

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  tags: string[];
  col = 3;
  domain: string;

  @Select(PortfolioState.getICards)
  cards$: Observable<ICards[]>;
  // getPortfolios$: Observable<any>;

  // constructor(private store: Store) {}

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
