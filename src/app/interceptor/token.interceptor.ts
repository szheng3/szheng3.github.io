import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {LoadingService} from "~/core/util/loading.service";
import {catchError, finalize, shareReplay, startWith} from "rxjs/operators";
import {environment} from "~/environments/environment";
import {Observable, throwError} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoadingState(true);
    const url = environment.domain + request.url;
    const update: any = {
      url: url,

    };

    // if (request.method === 'POST' || request.method === 'DELETE' || request.method === 'PUT') {
    //   update['setHeaders'] = {
    //     'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
    //   }
    // }
    request = request.clone(update);

    return next.handle(request).pipe(
      shareReplay(),
      catchError(error => {
        this.loadingService.setErrorState('Failed to load data');
        return throwError(error);
      }),
      finalize(() => {
        // Hide loading state

        this.loadingService.setLoadingState(false);
      })
    );
  }
}
