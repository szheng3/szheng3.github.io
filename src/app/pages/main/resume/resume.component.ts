import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {INgxLoadingConfig, ngxLoadingAnimationTypes} from "ngx-loading";
import {DOCUMENT, isPlatformBrowser, NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {IloadingComponent} from "~/share/component/iloading/iloading.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [
    PdfViewerModule,
    NgStyle,
    TitleCasePipe,
    IloadingComponent,
    UpperCasePipe,
    RouterLink
  ],
  standalone: true
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

  async ngOnInit() {
    if (typeof window !== 'undefined') {

      // const pdfViewerModule = await import('ng2-pdf-viewer');
      // this.PdfViewer = pdfViewerModule.PdfViewerComponent;
      //
      // const moduleFactory = await this.compiler.compileModuleAsync(pdfViewerModule.Ng2PdfViewerModule);
      // const moduleRef = moduleFactory.create(this.injector);
      //
      // const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(this.PdfViewer);
      // this.viewContainerRef.createComponent(componentFactory);
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      // import('ng2-pdf-viewer').then(({PdfViewerModule}) => {
      //   // Dynamically add PdfViewerModule to the imports
      //   (this.constructor as any).ɵmod.imports.push(PdfViewerModule);
      // });
    }

  }

  pageRendered() {
    const element = this.document.querySelector('.page');
    if (element) {
      this.pdfHeight = element.clientHeight;

    }
    this.loading = false;


  }


}
