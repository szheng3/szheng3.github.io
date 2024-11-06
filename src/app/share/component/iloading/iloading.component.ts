import {Component, Input} from '@angular/core';
import {INgxLoadingConfig, ngxLoadingAnimationTypes, NgxLoadingModule,} from 'ngx-loading';

@Component({
  selector: 'app-iloading',
  templateUrl: './iloading.component.html',
  imports: [NgxLoadingModule],
  standalone: true,
  styleUrls: ['./iloading.component.css'],
})
export class IloadingComponent {
  @Input()
  isLoading: boolean = false;

  loadingConfig: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    backdropBackgroundColour: 'rgba(255,255,255,0.1)',
    backdropBorderRadius: '4px',
    primaryColour: '#999999',
    secondaryColour: '#999999',
    tertiaryColour: '#999999',
  };

  constructor() {}
}
