import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {LoadingService} from 'src/app/core/util/loading.service';
import {HttpClient} from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
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
    @Inject(PLATFORM_ID) platformId:Object,
    private router: Router,
    private loadingService: LoadingService,
    private httpClient: HttpClient,
    private meta: Meta,
    private title: Title,

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

  private updateMetaTags() {
    const route = this.router.routerState.snapshot.root;
    let pageTitle = 'Shuai\'s Resume';
    let pageDescription = 'Shuai Zheng\'s professional resume and portfolio showcasing software development skills and projects.';

    if (route.firstChild) {
      pageTitle = route.firstChild.data['title'] || pageTitle;
      pageDescription = route.firstChild.data['description'] || pageDescription;
    }

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:url', content: `https://www.sszzz.me${this.router.url}` });
  }

  ngOnInit(): void {
    // this.store.dispatch(new CheckHealth(''));
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMetaTags();
    });
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
