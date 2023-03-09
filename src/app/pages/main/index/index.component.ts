import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetPortfoliosAction } from 'src/store/portfolio/portfolio.actions';
import { Observable } from 'rxjs';
import { WrapObsWithStatus } from 'src/app/share/util/WrapObsWithStatusWithoutValue';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ResumeModalComponent } from 'src/app/pages/main/component/resume-modal/resume-modal.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  portfoliosLoading$: Observable<WrapObsWithStatus<any>>;

  constructor(private store: Store, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(ResumeModalComponent);
  }

  ngOnInit() {
    this.portfoliosLoading$= this.store.dispatch(
      new GetPortfoliosAction({index: true})).pipe(tap(x => gallery()));

  }
}
