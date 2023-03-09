import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService ) {}

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    return this.cookieService.check('token');
  }
}
