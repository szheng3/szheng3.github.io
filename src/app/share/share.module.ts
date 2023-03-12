import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {ClassArrayPipe} from './pipe/class-array.pipe';
import {TagsPipe} from './pipe/tags.pipe';
import {LinkMapPipe} from './pipe/link-map.pipe';
import {SanitizeHtmlPipe} from './pipe/sanitize-html.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {MomentModule} from 'ngx-moment';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';
// import { ProgressiveImageLoaderDirective } from './directive/progressive-image-loader-directive.directive';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {WithLoadingPipe} from './pipe/with-loading.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChatbotComponent } from './component/chatbot/chatbot.component';
import {NbButtonModule, NbChatModule, NbIconModule, NbSpinnerModule, NbUserModule} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  declarations: [
    MainLayoutComponent,
    ClassArrayPipe,
    TagsPipe,
    LinkMapPipe,
    SanitizeHtmlPipe,
    // ProgressiveImageLoaderDirective,
    WithLoadingPipe,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.pulse,
      backdropBackgroundColour: 'rgba(0,0,0,1)',
      backdropBorderRadius: '4px',
      primaryColour: '#000000',
      secondaryColour: '#000000',
      tertiaryColour: '#000000'
    }),
    NbChatModule,
    NbEvaIconsModule,
    NbSpinnerModule,
    NbIconModule,
    NbButtonModule,
    NbUserModule
  ],
  exports: [
    LazyLoadImageModule,
    MainLayoutComponent,
    CommonModule,
    ClassArrayPipe,
    TagsPipe,
    LinkMapPipe,
    SanitizeHtmlPipe,
    HttpClientModule,
    FormsModule,
    MomentModule,
    NgxJsonLdModule,
    // ProgressiveImageLoaderDirective,
    WithLoadingPipe,
    ChatbotComponent
  ]
})
export class ShareModule {}
