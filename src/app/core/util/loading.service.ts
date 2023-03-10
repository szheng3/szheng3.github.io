import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading: boolean = false;
  private loading$: Subject<boolean> = new Subject<boolean>();
  private error$: Subject<string> = new Subject<string>();

  constructor() {
  }

  disable() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }

  loading() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'initial';
    }
  }

  getLoadingState(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoadingState(isLoading: boolean) {
    this.isLoading = isLoading;
    this.loading$.next(isLoading);
  }

  isLoadingState(): boolean {
    return this.isLoading;
  }

  getErrorState(): Observable<string> {
    return this.error$.asObservable();
  }

  setErrorState(errorMessage: string) {
    this.error$.next(errorMessage);
  }
}
