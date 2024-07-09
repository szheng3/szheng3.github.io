import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {LoadingService} from "~/core/util/loading.service";
import {catchError, finalize, shareReplay} from "rxjs/operators";
import {environment} from "~/environments/environment";
import {Observable, throwError} from "rxjs";
import {NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private loadingService: LoadingService, private toastrService: NbToastrService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoadingState(true);
    const url = environment.apis.default.url + request.url;
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
        this.toastrService.show('Please try again!', `Ops! there is a problem! `, {
          position: NbGlobalPhysicalPosition.TOP_RIGHT,
          status: 'danger',
          preventDuplicates: true,
        });
        return throwError(error);
      }),
      finalize(() => {
        // Hide loading state

        this.loadingService.setLoadingState(false);
      })
    );
  }
}
