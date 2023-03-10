import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetPortfolioAction} from 'src/store/portfolio/portfolio.actions';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {PortfolioState} from 'src/store/portfolio/portfolio.state';
import {Link} from 'src/app/share/response/portfolio';
import {isPlatformBrowser} from '@angular/common';

export interface IPortfolioDetails {
  imageSrc?: string;
  createDate?: string;
  skills?: string[];
  client?: string;
  title?: string;
  content?: string;
  links?: Link[];
}

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  @Select(PortfolioState.getPortfolioDetails)
  detail$: Observable<IPortfolioDetails>;
  isBrowser: boolean;
  getPortfolio$: Observable<any>;

  constructor(private store: Store, private route: ActivatedRoute, @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPortfolio$ = this.store.dispatch(new GetPortfolioAction(+params.id));
    });
  }

  onImgLoad(e) {
    console.log('High quality image loaded?', e.loaded);
  }
  onThumbLoad(e) {
    console.log('Low qaulity thumbnail loaded?', e.loaded);
  }
}
