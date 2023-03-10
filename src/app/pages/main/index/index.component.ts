import {Component, OnInit} from '@angular/core';
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

  constructor() {}


  ngOnInit() {
    // this.portfoliosLoading$= this.store.dispatch(
    //   new GetPortfoliosAction({index: true})).pipe(tap(x => gallery()));

  }
}
