import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from "../../share/response/response";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendEmail(body: any) {
    return this.http.post<IResponse>('/api/app/notification/send', body);
  }

}
