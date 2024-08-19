import {Component, OnInit} from '@angular/core';
import {BlogDto, ContextType} from "~/proxy/resumes";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BlogService} from "~/core/api/blog.service";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {MarkdownPipe} from "ngx-markdown";

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
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
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

  protected readonly ContextType = ContextType;
}