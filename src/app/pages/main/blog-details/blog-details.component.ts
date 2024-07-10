import {Component, OnInit} from '@angular/core';
import {BlogDto} from "~/proxy/resumes";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BlogService} from "~/core/api/blog.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    RouterLink,
    LazyLoadImageModule
  ],
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: BlogDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getOne(id).subscribe(
        (blog: BlogDto) => {
          this.blog = blog;
        },
        error => {
          console.error('Error fetching blog post:', error);
        }
      );
    }
  }
}
