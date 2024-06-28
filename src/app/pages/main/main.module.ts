import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {LayoutComponent} from './layout/layout.component';
import {NavComponent} from './component/nav/nav.component';
import {HeaderlayoutComponent} from './layout/headerlayout/headerlayout.component';
import {FooterComponent} from './component/footer/footer.component';
import {ContactComponent} from './contact/contact.component';

import {ServicesComponent} from './services/services.component';

import {MyServiceComponent} from './component/my-service/my-service.component';

import {BreadcrumblayoutComponent} from './layout/breadcrumblayout/breadcrumblayout.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NgxLoadingModule} from "ngx-loading";
import {ShareModule} from "~/share/share.module";
import {PortfoliosComponent} from "./component/portfolios/portfolios.component";
import {NbChatModule, NbLayoutModule, NbSpinnerModule} from "@nebular/theme";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {PortfolioDetailsComponent} from "~/pages/main/portfolio-details/portfolio-details.component";
import {IloadingComponent} from "~/share/component/iloading/iloading.component";

@NgModule({
  declarations: [
    BreadcrumblayoutComponent,
    MainComponent,
    IndexComponent,
    LayoutComponent,
    NavComponent,
    HeaderlayoutComponent,
    FooterComponent,
    ContactComponent,
    // BlogComponent,
    // AboutUsComponent,
    ServicesComponent,
    PortfolioComponent,
    // BlogDetailsComponent,
    PortfolioDetailsComponent,
    MyServiceComponent,
    PortfoliosComponent,
    // PolicyComponent,
    // LoginComponent,
    // ResumeModalComponent,
  ],
  imports: [
    MatDialogModule,
    ShareModule,
    MainRoutingModule,
    // MarkdownModule.forChild(),
    // PdfViewerModule,
    MatButtonModule,
    NgxLoadingModule,
    NbSpinnerModule,
    NbChatModule,
    NbLayoutModule,
    IloadingComponent
  ],
  // bootstrap: [ResumeModalComponent]
})
export class MainModule {
}
