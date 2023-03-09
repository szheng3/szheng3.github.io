import { Component, Input, OnInit } from '@angular/core';
import { WrapObsWithStatus } from 'src/app/share/util/WrapObsWithStatusWithoutValue';
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-iloading',
  templateUrl: './iloading.component.html',
  styleUrls: ['./iloading.component.css']
})
export class IloadingComponent implements OnInit {
  @Input()
  isLoading: WrapObsWithStatus<any>;

  loadingConfig: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    backdropBackgroundColour: 'rgba(255,255,255,0.5)',
    backdropBorderRadius: '4px',
    primaryColour: '#999999',
    secondaryColour: '#999999',
    tertiaryColour: '#999999'
  };

  constructor() {}

  ngOnInit() {}
}
