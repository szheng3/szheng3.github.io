import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbLayoutModule, NbThemeModule, NbToastrModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptor/token.interceptor";
import {CookieService} from "ngx-cookie-service";

// import {NgxsStoreModule} from "../store/store.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NbToastrModule.forRoot(),
    // NgxsStoreModule,
    // CoreModule.forRoot({
    //   environment,
    //   registerLocaleFn: registerLocale()
    // }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
