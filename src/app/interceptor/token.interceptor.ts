import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST' || request.method === 'DELETE' || request.method === 'PUT') {
      request = request.clone({
        setHeaders: {
          'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        }
      });
    }
    return next.handle(request);
  }
}
