import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/pages/main/main.component';
import { IndexComponent } from 'src/app/pages/main/index/index.component';
import { ContactComponent } from 'src/app/pages/main/contact/contact.component';
import { BlogComponent } from 'src/app/pages/main/blog/blog.component';
import { AboutUsComponent } from 'src/app/pages/main/about-us/about-us.component';
import { ServicesComponent } from 'src/app/pages/main/services/services.component';
import { PortfolioComponent } from 'src/app/pages/main/portfolio/portfolio.component';
import { BlogDetailsComponent } from 'src/app/pages/main/blog-details/blog-details.component';
import { PortfolioDetailsComponent } from 'src/app/pages/main/portfolio-details/portfolio-details.component';
import { PolicyComponent } from 'src/app/pages/main/policy/policy.component';
import { LoginComponent } from 'src/app/pages/main/login/login.component';
import {ResumeComponent} from "./resume/resume.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
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
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
