import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

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

// export function wrapObsWithStatusWithoutValue<T>(obs: Observable<T>): Observable<WrapObsWithStatus<T>> {
//   return obs.pipe(
//     map(x => ({
//       status: ObsStatus.SUCCESS,
//       value: null,
//       error: null,
//       loading: false
//     })),
//     startWith({ status: ObsStatus.LOADING, value: null, error: null, loading: true }),
//     catchError(err => {
//       return of({ status: ObsStatus.ERROR, value: null, error: err, loading: false });
//     })
//   );
// }

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
//
// export function handleWrapObsWithStatus(
//   x: WrapObsWithStatus<any>,
//   htmlSelector: string = 'noId',
//   { errorMessage = 'Ops, there is a problem, please try again!', successMessage = 'Success!!' }
// ) {
//
//   const selector = $(htmlSelector);
//   switch (x.status) {
//     case ObsStatus.ERROR:
//       // M.toast({ html: errorMessage });
//       selector.buttonState('reset');
//
//       break;
//     case ObsStatus.SUCCESS:
//       // M.toast({ html: successMessage });
//       // @ts-ignore
//       selector.buttonState('reset');
//       break;
//     case ObsStatus.LOADING:
//       selector.buttonState('loading');
//       break;
//     default:
//       selector.buttonState('reset');
//       break;
//   }
// }
export function loadingObs(
  obs: Observable<any>,
  {htmlSelector = 'noId', errorMessage = '', successMessage = ''}, document: Document
): Observable<any> {
  const selector = document.querySelector(htmlSelector) as HTMLElement;

  if (selector) {
    setButtonState(selector, 'loading');
  }

  return obs.pipe(
    tap(() => {
      if (successMessage) {
        // You might want to implement a custom toast function here
        // showToast(successMessage);
      }
      if (selector) {
        setButtonState(selector, 'reset');
      }
    }),
    catchError(err => {
      if (errorMessage) {
        // You might want to implement a custom toast function here
        // showToast(errorMessage);
      }
      if (selector) {
        setButtonState(selector, 'reset');
      }
      throw err;
    })
  );
}

// Helper function to set button state
function setButtonState(element: HTMLElement, state: 'loading' | 'reset') {
  // Implement the logic to change the button state
  // This will depend on how you want to represent loading and reset states
  if (state === 'loading') {
    element.setAttribute('disabled', 'true');
    element.textContent = 'Loading...';
  } else {
    element.removeAttribute('disabled');
    element.textContent = 'Submit'; // or whatever the default text should be
  }
}
