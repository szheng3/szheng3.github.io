import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/api/portfolio.service";
import {tap} from "rxjs/operators";
import {LoadingService} from 'src/app/core/util/loading.service';
// import {Store} from '@ngxs/store';
// import { GetPortfoliosAction } from 'src/store/portfolio/portfolio.actions';
// import { Observable } from 'rxjs';
// import { WrapObsWithStatus } from 'src/app/share/util/WrapObsWithStatusWithoutValue';
// import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // loading$ = this.loadingService.getLoadingState()

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService) {
  }


  ngOnInit() {
    this.portfolioService.getPortfolios({index: true}).pipe(tap(x => gallery())).subscribe();
    // this.portfoliosLoading$= this.store.dispatch(
    //   new GetPortfoliosAction({index: true})).pipe(tap(x => gallery()));

  }
}
