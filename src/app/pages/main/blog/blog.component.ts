import {Component, OnInit} from '@angular/core';
import {BlogCategoryDto, BlogDto, BlogTagDto} from '~/proxy/resumes';
import {Observable} from 'rxjs';
import {BlogService} from "~/core/api/blog.service";
import {RouterLink} from "@angular/router";
import {AsyncPipe, DatePipe, NgForOf, SlicePipe} from "@angular/common";
import {ShareModule} from "~/share/share.module";
import {StripHtmlPipe} from "~/share/pipe/stripHtml.pipe";
import {TruncatePipe} from "~/share/pipe/truncate.pipe";
import {MarkdownPipe} from "ngx-markdown";

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
    MarkdownPipe
  ],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogsByCreationTime$: Observable<BlogDto[] | undefined>;
  hotBlogs$: Observable<BlogDto[] | undefined>;
  blogCategories$: Observable<BlogCategoryDto[] | undefined>;
  blogTags$: Observable<BlogTagDto[] | undefined>;

  constructor(private blogService: BlogService) {
    this.blogsByCreationTime$ = this.blogService.getBlogsByCreationTime$();
    this.hotBlogs$ = this.blogService.getHotBlogs$();
    this.blogCategories$ = this.blogService.getBlogCategories$();
    this.blogTags$ = this.blogService.getBlogTags$();
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.blogService.loadBlogsByCreationTime();
    this.blogService.loadHotBlogs();
    this.blogService.loadBlogCategories();
    this.blogService.loadBlogTags();
  }
}
