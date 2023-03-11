import {Injectable} from '@angular/core';
import {PortfolioService} from "~/core/api/portfolio.service";
import {LoadingService} from "~/core/util/loading.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(public portfolioService: PortfolioService, public loadingService: LoadingService) {
  }
}
