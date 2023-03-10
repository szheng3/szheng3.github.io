import {Component, OnInit, ViewChild} from '@angular/core';
import {INgxLoadingConfig, ngxLoadingAnimationTypes} from "ngx-loading";
import {PdfViewerComponent} from "ng2-pdf-viewer";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent!: PdfViewerComponent;
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

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }
  ngOnInit(): void {
    this.loading=true
  }

  loadingTrue() {
    this.loading=false;
  }
}
