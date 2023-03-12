import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

declare var $: any;
declare var pluginsJs: any;
declare var mainJs: any;

@Component({
  selector: 'app-headerlayout',
  templateUrl: './headerlayout.component.html',
  styleUrls: ['./headerlayout.component.scss']
})
export class HeaderlayoutComponent implements OnInit, AfterViewInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // $.getScript('/assets/js/ckeditor.js');

    if (this.isBrowser) {
      // $.getScript('/assets/js/plugins.js');
      // window.addEventListener('scroll', this.scrollEvent, true); // third parameter
      // mainJs();


      // pluginsJs();
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // $('.sticky-header').removeClass('is-sticky');
        // this.smoothScrollTop();
        const scrollElem = document.querySelector('#top');
        // scrollElem.scrollIntoView({behavior:'smooth',block:"center"});
        scrollElem?.scrollIntoView();
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
      }
    });
  }
  scrollEvent = (event: any): void => {
    const scrollPos = event.srcElement.scrollTop;
    if (scrollPos > 30) {
      $('.sticky-header').addClass('is-sticky');
    } else {
      $('.sticky-header').removeClass('is-sticky');
    }
  };
}
