import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {IndexComponent} from "./index/index.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioDetailsComponent} from "~/pages/main/portfolio-details/portfolio-details.component";
import {BlogComponent} from "~/pages/main/blog/blog.component";
import {BlogDetailsComponent} from "~/pages/main/blog-details/blog-details.component";
import {PolicyComponent} from "~/pages/main/policy/policy.component";

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
        loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent)
        // component: ResumeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog/:id',
        component: BlogDetailsComponent
      },
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
      {
        path: 'policy',
        component: PolicyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
