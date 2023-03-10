import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {LayoutComponent} from './layout/layout.component';
import {NavComponent} from './component/nav/nav.component';
import {HeaderlayoutComponent} from './layout/headerlayout/headerlayout.component';
import {FooterComponent} from './component/footer/footer.component';
import {ContactComponent} from './contact/contact.component';
// import { BlogComponent } from './blog/blog.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { BlogDetailsComponent } from './blog-details/blog-details.component';
// import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
// import { MarkdownModule } from 'ngx-markdown';
import {MyServiceComponent} from './component/my-service/my-service.component';
// import { PortfoliosComponent } from './component/portfolios/portfolios.component';
// import { PolicyComponent } from './policy/policy.component';
import {BreadcrumblayoutComponent} from './layout/breadcrumblayout/breadcrumblayout.component';
// import { LoginComponent } from './login/login.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ResumeModalComponent} from './component/resume-modal/resume-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import { ResumeComponent } from './resume/resume.component';
import {NgxLoadingModule} from "ngx-loading";
import {ResumeComponent} from "./resume/resume.component";
import {ShareModule} from "../../share/share.module";
import {PortfoliosComponent} from "./component/portfolios/portfolios.component";
import {NbSpinnerModule} from "@nebular/theme";
import {IloadingComponent} from "./component/iloading/iloading.component";

@NgModule({
  declarations: [
    BreadcrumblayoutComponent,
    MainComponent,
    IndexComponent,
    LayoutComponent,
    NavComponent,
    HeaderlayoutComponent,
    FooterComponent,
    IloadingComponent,
    ContactComponent,
    // BlogComponent,
    // AboutUsComponent,
    ServicesComponent,
    // PortfolioComponent,
    // BlogDetailsComponent,
    // PortfolioDetailsComponent,
    MyServiceComponent,
    PortfoliosComponent,
    // PolicyComponent,
    // LoginComponent,
    ResumeModalComponent,
    ResumeComponent
  ],
  imports: [
    MatDialogModule,
    ShareModule,
    MainRoutingModule,
    // MarkdownModule.forChild(),
    PdfViewerModule,
    MatButtonModule,
    NgxLoadingModule,
    NbSpinnerModule
  ],
  bootstrap: [ResumeModalComponent]
})
export class MainModule {}
