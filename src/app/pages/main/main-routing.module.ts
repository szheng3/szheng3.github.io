import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {MainComponent} from "./main.component";
import {IndexComponent} from "./index/index.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioDetailsComponent} from "~/pages/main/portfolio-details/portfolio-details.component";
// import { ContactComponent } from 'src/app/pages/main/contact/contact.component';
// import { BlogComponent } from 'src/app/pages/main/blog/blog.component';
// import { AboutUsComponent } from 'src/app/pages/main/about-us/about-us.component';
// import { ServicesComponent } from 'src/app/pages/main/services/services.component';
// import { PortfolioComponent } from 'src/app/pages/main/portfolio/portfolio.component';
// import { BlogDetailsComponent } from 'src/app/pages/main/blog-details/blog-details.component';
// import { PortfolioDetailsComponent } from 'src/app/pages/main/portfolio-details/portfolio-details.component';
// import { PolicyComponent } from 'src/app/pages/main/policy/policy.component';
// import { LoginComponent } from 'src/app/pages/main/login/login.component';
// import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },

      // {
      //   path: 'about-us',
      //   component: AboutUsComponent
      // },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      // {
      //   path: 'blog',
      //   component: BlogComponent
      // },
      // {
      //   path: 'blog/:id',
      //   component: BlogDetailsComponent
      // },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },

      {
        path: 'portfolio/:id',
        component: PortfolioDetailsComponent
      },
      // {
      //   path: 'policy',
      //   component: PolicyComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
