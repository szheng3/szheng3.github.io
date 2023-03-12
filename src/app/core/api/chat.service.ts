import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private http: HttpClient) {
  }

  send(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .post<any[]>("/message", {message_history: [{"role": "user", "content": term}]})
      .pipe(catchError(this.handleError<any[]>('chat', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
