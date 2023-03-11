import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PortfolioService} from "../../../core/api/portfolio.service";
import {tap,delay} from "rxjs/operators";
import {LoadingService} from 'src/app/core/util/loading.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,AfterViewInit {

  constructor(private portfolioService: PortfolioService, public loadingService: LoadingService) {
  }


  ngOnInit() {

    this.portfolioService.getPortfolios({index: true}).pipe(
      delay(1),
      tap(x => gallery()
      )).subscribe();

  }

  ngAfterViewInit(): void {

  }
}
