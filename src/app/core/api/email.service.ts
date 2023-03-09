import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/app/share/response/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly url: string = environment.domain;

  constructor(private http: HttpClient) {}

  sendEmail(body) {
    return this.http.post<IResponse>(this.url + '/email/send', body);
  }

  apiHealth() {
    return this.http.get(this.url + '/health');
  }
}
