import {Component, OnInit} from '@angular/core';
import {BlogDto, BlogTagDto, type CategoryWithBlogCount} from '~/proxy/resumes';
import {Observable} from 'rxjs';
import {BlogService} from "~/core/api/blog.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AsyncPipe, DatePipe, NgForOf, SlicePipe} from "@angular/common";
import {ShareModule} from "~/share/share.module";
import {StripHtmlPipe} from "~/share/pipe/stripHtml.pipe";
import {TruncatePipe} from "~/share/pipe/truncate.pipe";
import {MarkdownPipe} from "ngx-markdown";
import {ImageUrlPipe} from "~/share/pipe/imageurl.pipe";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgForOf,
    SlicePipe,
    DatePipe,
    ShareModule,
    StripHtmlPipe,
    TruncatePipe,
    MarkdownPipe,
    ImageUrlPipe
  ],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogsByCreationTime$: Observable<BlogDto[] | undefined>;
  hotBlogs$: Observable<BlogDto[] | undefined>;
  blogCategories$: Observable<CategoryWithBlogCount[] | undefined>;
  blogTags$: Observable<BlogTagDto[] | undefined>;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.blogsByCreationTime$ = this.blogService.getBlogsByCreationTime$();
    this.hotBlogs$ = this.blogService.getHotBlogs$();
    this.blogCategories$ = this.blogService.getBlogCategories$();
    this.blogTags$ = this.blogService.getBlogTags$();
  }

  ngOnInit() {
    this.loadData();

    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag');
      const category = params.get('category');

      const tagArray = tag ? [tag] : [];
      const categoryArray = category ? [category] : [];

      this.blogService.loadBlogsByCreationTime(categoryArray, tagArray);
    });
  }

  loadData() {
    this.blogService.loadHotBlogs();
    this.blogService.loadBlogCategories();
    this.blogService.loadBlogTags();
  }
}
