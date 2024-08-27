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
        component: IndexComponent,
        data: { title: 'Shuai Zheng - Home', description: 'Welcome to Shuai Zheng\'s professional portfolio and resume.' }

      },

      // {
      //   path: 'about-us',
      //   component: AboutUsComponent
      // },
      {
        path: 'resume',
        loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent),
        // component: ResumeComponent
        data: { title: 'Shuai Zheng - Resume', description: 'View the professional resume of Shuai Zheng.' }

      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Shuai Zheng - Contact', description: 'Get in touch with Shuai Zheng for any inquiries or collaboration opportunities.' }

      },
      {
        path: 'blog',
        component: BlogComponent,
        data: { title: 'Shuai Zheng - Blog', description: 'Read the latest articles and insights from Shuai Zheng on software development and technology trends.' }

      },
      {
        path: 'blog/:id',
        component: BlogDetailsComponent,
        data: { title: 'Shuai Zheng - Blog Details', description: 'Detailed view of the selected blog post by Shuai Zheng.' }

      },
      {
        path: 'services',
        component: ServicesComponent,
        data: { title: 'Shuai Zheng - Services', description: 'Discover the range of services offered by Shuai Zheng, including web development, mobile development, and cloud solutions.' }

        
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        data: { title: 'Shuai Zheng - Portfolio', description: 'Explore Shuai Zheng\'s software development projects and achievements.' }
      },

      {
        path: 'portfolio/:id',
        component: PortfolioDetailsComponent,
        data: { title: 'Shuai Zheng - Portfolio Details', description: 'View details of Shuai Zheng\'s portfolio showcasing software development skills and projects.' }
      },
      {
        path: 'policy',
        component: PolicyComponent,
        data: { title: 'Shuai Zheng - Policy', description: 'View Shuai Zheng\'s policy and terms of use.' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
