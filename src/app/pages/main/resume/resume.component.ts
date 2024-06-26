import {Component, Inject, OnInit} from '@angular/core';
import {INgxLoadingConfig, ngxLoadingAnimationTypes} from "ngx-loading";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfHeight = 10;

  loadingConfig: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    backdropBackgroundColour: 'rgba(255,255,255,0.5)',
    backdropBorderRadius: '4px',
    primaryColour: '#999999',
    secondaryColour: '#999999',
    tertiaryColour: '#999999'
  };
  loading = true;

  ngOnInit(): void {
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  pageRendered() {
    const element = this.document.querySelector('.page');
    if (element) {
      this.pdfHeight = element.clientHeight;

    }
    this.loading = false;


  }


}
