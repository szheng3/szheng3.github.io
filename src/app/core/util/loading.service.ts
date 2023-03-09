import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor() {}

  disable() {
    document.getElementById('loading').style.display = 'none';
  }

  loading() {
    document.getElementById('loading').style.display = 'initial';
  }
}
