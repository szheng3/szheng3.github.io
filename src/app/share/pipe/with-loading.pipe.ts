import {Pipe, PipeTransform} from '@angular/core';
import {isObservable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ObsStatus} from 'src/app/share/util/WrapObsWithStatusWithoutValue';
import {MatSnackBar} from '@angular/material/snack-bar';

@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {
  constructor(private _snackBar: MatSnackBar) {}

  transform(val:any) {
    return isObservable(val)
      ? val.pipe(
        map(x => ({
          status: ObsStatus.SUCCESS,
          value: null,
          error: null,
          loading: false
        })),
        startWith({ status: ObsStatus.LOADING, value: null, error: null, loading: true }),
        catchError(err => {
          this._snackBar.open("Request fails!");
          return of({ status: ObsStatus.ERROR, value: null, error: err, loading: false });
        })
      )
      : val;
  }
}
