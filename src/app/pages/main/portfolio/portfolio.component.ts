import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GetPortfoliosAction} from 'src/store/portfolio/portfolio.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  current = 0;
  size = 9;

  portfoliosLoading$: Observable<any>=of();

  constructor() {}

  ngOnInit() {
     // this.portfoliosLoading$= this.store.dispatch(
     //    new GetPortfoliosAction({ current: this.current, size: this.size })).pipe(tap(x => gallery()));
  }



  viewMore() {
    this.size = this.size + 9;
    // this.portfoliosLoading$= this.store.dispatch(
    //   new GetPortfoliosAction({ current: this.current, size: this.size })).pipe(tap(x => gallery()))
  }
}
