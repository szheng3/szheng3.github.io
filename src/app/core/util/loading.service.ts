import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading: boolean = false;
  private loading$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private error$: Subject<string> = new Subject<string>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  disable() {
    const loadingElement = this.document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }

  loading() {
    const loadingElement = this.document.getElementById('loading');
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
