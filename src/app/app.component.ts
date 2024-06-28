import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {LoadingService} from 'src/app/core/util/loading.service';
import {HttpClient} from '@angular/common/http';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = "Shuai' Resume";
  isBrowser: boolean;

  // @Select(EmailState.getState)
  // health: Observable<EmailStateModel>;

  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Resume',
    url: 'https://www.sszzz.me'
  };

  constructor(
    @Inject(PLATFORM_ID) platformId:object,
    private router: Router,
    private loadingService: LoadingService,
    private httpClient: HttpClient,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    meta.addTags([
      { name: 'description', content: 'Shuai Resume' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {name: 'robots', content: 'INDEX, FOLLOW'},
      { name: 'author', content: 'Shuai' },
      { name: 'keywords', content: 'Resume' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Shuai Resume' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ]);

    this.isBrowser = isPlatformBrowser(platformId);
    this.router.events.subscribe(event => {
      if (this.isBrowser && event instanceof NavigationEnd) {
        loadingService.disable();
        // (window as any).ga('set', 'page', event.urlAfterRedirects);
        // (window as any).ga('send', 'pageview');
      }
    });
  }

  ngOnInit(): void {
    // this.store.dispatch(new CheckHealth(''));

  }

  ngAfterViewInit(): void {
    // $.getScript('/assets/js/ckeditor.js');

    // if (this.isBrowser) {
    //   $.ajaxSetup({
    //     cache: true
    //   });
    //   $.getScript('/assets/js/off-canvas.js');
    //   $.getScript('/assets/js/misc.js');
    // }
    // CKEDITOR.replace( 'editor' );
    // tslint:disable-next-line:only-arrow-functions
    const loadingElement = this.document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }
}
