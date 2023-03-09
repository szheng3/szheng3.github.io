import { Observable, of } from 'rxjs';
import { catchError, map, startWith, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export enum ObsStatus {
  SUCCESS = 'Success',
  ERROR = 'Error',
  LOADING = 'Loading'
}

export interface WrapObsWithStatus<T> {
  status?: ObsStatus;
  value?: T;
  error?: HttpErrorResponse;
  loading?: boolean;
}

export interface WrapObsParam {
  htmlSelector?: string;
  errorMessage?: string;
  successMessage?: string;
}

export function wrapObsWithStatusWithoutValue<T>(obs: Observable<T>): Observable<WrapObsWithStatus<T>> {
  return obs.pipe(
    map(x => ({
      status: ObsStatus.SUCCESS,
      value: null,
      error: null,
      loading: false
    })),
    startWith({ status: ObsStatus.LOADING, value: null, error: null, loading: true }),
    catchError(err => {
      return of({ status: ObsStatus.ERROR, value: null, error: err, loading: false });
    })
  );
}

// export function wrapObsWithStatus<T>(obs: Observable<T>): Observable<WrapObsWithStatus<T>> {
//   return obs.pipe(
//     map(x => ({
//       status: ObsStatus.SUCCESS,
//       value: x,
//       error: null,
//       loading: false
//     })),
//     startWith(
//       { status: ObsStatus.LOADING, value: null, error: null, loading: true }),
//     catchError(err => {
//       return of(
//         { status: ObsStatus.ERROR, value: null, error: err, loading: false });
//     })
//   );
// }

export function handleWrapObsWithStatus(
  x: WrapObsWithStatus<any>,
  htmlSelector: string = 'noId',
  { errorMessage = 'Ops, there is a problem, please try again!', successMessage = 'Success!!' }
) {

  const selector = $(htmlSelector);
  switch (x.status) {
    case ObsStatus.ERROR:
      // M.toast({ html: errorMessage });
      selector.buttonState('reset');

      break;
    case ObsStatus.SUCCESS:
      // M.toast({ html: successMessage });
      // @ts-ignore
      selector.buttonState('reset');
      break;
    case ObsStatus.LOADING:
      selector.buttonState('loading');
      break;
    default:
      selector.buttonState('reset');
      break;
  }
}

export function loadingObs(
  obs: Observable<any>,
  { htmlSelector = 'noId', errorMessage = '', successMessage = '' }
): Observable<any> {
  const selector = $(htmlSelector);
  selector.buttonState('loading');
  return obs.pipe(
    tap(() => {
      if (successMessage) {
        // M.toast({ html: successMessage });
      }
      selector.buttonState('reset');
    }),
    catchError(err => {
      if (errorMessage) {
        // M.toast({ html: errorMessage });
      }
      selector.buttonState('reset');
      throw err;
    })
  );
}
