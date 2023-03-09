import { Component, OnInit } from '@angular/core';
import {INgxLoadingConfig, ngxLoadingAnimationTypes} from "ngx-loading";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  loadingConfig: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    backdropBackgroundColour: 'rgba(255,255,255,0.5)',
    backdropBorderRadius: '4px',
    primaryColour: '#999999',
    secondaryColour: '#999999',
    tertiaryColour: '#999999'
  };
  loading=true;
  constructor() {
  }

  ngOnInit(): void {
    this.loading=true
  }

  loadingTrue() {
    this.loading=false;
  }
}
