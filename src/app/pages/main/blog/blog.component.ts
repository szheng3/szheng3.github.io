import {Component, OnInit} from '@angular/core';
import {BlogDto, BlogTagDto, type CategoryWithBlogCount} from '~/proxy/resumes';
import {Observable} from 'rxjs';
import {BlogService} from "~/core/api/blog.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AsyncPipe, DatePipe, NgForOf, SlicePipe} from "@angular/common";
import {ShareModule} from "~/share/share.module";
import {StripHtmlPipe} from "~/share/pipe/stripHtml.pipe";
import {TruncatePipe} from "~/share/pipe/truncate.pipe";
import {MarkdownPipe} from "ngx-markdown";
import {ImageUrlPipe} from "~/share/pipe/imageurl.pipe";
import {NgxPaginationModule} from 'ngx-pagination'; // Add this import

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
    ImageUrlPipe,
    NgxPaginationModule // Add this to imports
  ],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogsByCreationTime$: Observable<BlogDto[] | undefined>;
  hotBlogs$: Observable<BlogDto[] | undefined>;
  blogCategories$: Observable<CategoryWithBlogCount[] | undefined>;
  blogTags$: Observable<BlogTagDto[] | undefined>;

  page = 1; // Add this for pagination
  itemsPerPage = 4; // Add this for pagination

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {
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
      this.page = Number(params.get('page')) || 1; // Add this line

      const tagArray = tag ? [tag] : [];
      const categoryArray = category ? [category] : [];

      this.blogService.loadBlogsByCreationTime(categoryArray, tagArray, (this.page - 1) * this.itemsPerPage, this.itemsPerPage);
    });
  }

  loadData() {
    this.blogService.loadHotBlogs();
    this.blogService.loadBlogCategories();
    this.blogService.loadBlogTags();
  }

  onPageChange(page: number) { // Add this method
    if (page < 1) return; // Prevent going to invalid pages
    this.page = page;
    this.route.queryParams.subscribe(params => {
      const updatedParams = {...params, page: this.page};
      this.router.navigate([], {queryParams: updatedParams});
    });
    this.loadBlogsByCreationTime(); // Reload blogs for the new page
  }

  loadBlogsByCreationTime() {
    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag');
      const category = params.get('category');
      const tagArray = tag ? [tag] : [];
      const categoryArray = category ? [category] : [];
      this.blogService.loadBlogsByCreationTime(categoryArray, tagArray, (this.page - 1) * this.itemsPerPage, this.itemsPerPage);
    });
  }
}
