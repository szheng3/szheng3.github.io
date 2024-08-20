import {Component, OnInit} from '@angular/core';
import {BlogDto, ContextType} from "~/proxy/resumes";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BlogService} from "~/core/api/blog.service";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {MarkdownPipe} from "ngx-markdown";
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    RouterLink,
    LazyLoadImageModule,
    MarkdownPipe,
    AsyncPipe
  ],
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: BlogDto | undefined;
  markdownContent = '# Hello, Markdown!'
  url: string='';
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.url = window.location.origin + this.location.path();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getOne(id).subscribe({
        next: (blog: BlogDto) => {
          this.blog = blog;
        },
        error: (error) => {
          console.error('Error fetching blog post:', error);
        }
      });
    }
  }

  share(platform: string) {
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url)}&text=${encodeURIComponent(this.blog?.title || '')}`;
        break;
      case 'google':
        shareUrl = `https://plus.google.com/share?url=${encodeURIComponent(this.url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(this.url)}&title=${encodeURIComponent(this.blog?.title || '')}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,left=100,top=100');
    }
  }


 

  protected readonly ContextType = ContextType;
}