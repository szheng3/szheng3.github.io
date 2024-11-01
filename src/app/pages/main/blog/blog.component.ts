import {Component, OnInit} from '@angular/core';
import {BlogDto, BlogTagDto, type CategoryWithBlogCount,} from '~/proxy/resumes';
import {Observable} from 'rxjs';
import {BlogService} from '~/core/api/blog.service';
import {ActivatedRoute, Router, RouterLink, RouterModule} from '@angular/router';
import {AsyncPipe, DatePipe, NgForOf, SlicePipe} from '@angular/common';
import {ShareModule} from '~/share/share.module';
import {StripHtmlPipe} from '~/share/pipe/stripHtml.pipe';
import {TruncatePipe} from '~/share/pipe/truncate.pipe';
import {MarkdownPipe} from 'ngx-markdown';
import {ImageUrlPipe} from '~/share/pipe/imageurl.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {PagedResultDto} from '@abp/ng.core';
import {tap} from 'rxjs/operators'; // Add this import
import {IloadingComponent} from '~/share/component/iloading/iloading.component';
import {FormsModule} from '@angular/forms';

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
    RouterModule,
    NgxPaginationModule, // Add this to imports
    IloadingComponent,
    FormsModule, // Add this to enable ngModel
  ],
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogsByCreationTime$: Observable<PagedResultDto<BlogDto>>;
  hotBlogs$: Observable<BlogDto[] | undefined>;
  blogCategories$: Observable<CategoryWithBlogCount[] | undefined>;
  blogTags$: Observable<BlogTagDto[] | undefined>;
  totalItems: number | undefined = 0; // Add this for pagination
  page = 1; // Add this for pagination
  itemsPerPage = 4; // Add this for pagination
  isLoading$: Observable<boolean>;
  searchTerm: string = ''; // Add this property

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.blogsByCreationTime$ = this.blogService
      .getBlogsByCreationTime$()
      .pipe(tap((result) => (this.totalItems = result.totalCount)));
    this.hotBlogs$ = this.blogService.getHotBlogs$();
    this.blogCategories$ = this.blogService.getBlogCategories$();
    this.blogTags$ = this.blogService.getBlogTags$();
    this.isLoading$ = this.blogService.getIsLoading$();
  }

  ngOnInit() {
    this.loadData();

    this.route.queryParamMap.subscribe((params) => {
      const tag = params.get('tag');
      const category = params.get('category');
      this.page = Number(params.get('page')) || 1; // Add this line
      this.searchTerm = params.get('search') || ''; // Get search term from query params

      const tagArray = tag ? [tag] : [];
      const categoryArray = category ? [category] : [];

      this.blogService.loadBlogsByCreationTime(
        categoryArray,
        tagArray,
        (this.page - 1) * this.itemsPerPage,
        this.itemsPerPage,
        this.searchTerm // Pass search term to the service
      );
    });
  }

  loadData() {
    this.blogService.loadHotBlogs();
    this.blogService.loadBlogCategories();
    this.blogService.loadBlogTags();
  }

  onSearch() {
    this.page = 1; // Reset to first page on new search
    const updatedParams = {
      ...this.route.snapshot.queryParams,
      search: this.searchTerm,
      page: this.page,
    };
    this.router.navigate([], {queryParams: updatedParams});
  }

  onPageChange(page: number) {
    // Add this method
    if (page < 1) return; // Prevent going to invalid pages
    this.page = page;
    const updatedParams = {
      ...this.route.snapshot.queryParams,
      page: this.page,
    };
    this.router.navigate([], {queryParams: updatedParams});
  }

  loadBlogsByCreationTime() {
    const params = this.route.snapshot.queryParamMap;
    const tag = params.get('tag');
    const category = params.get('category');
    this.searchTerm = params.get('search') || '';

    const tagArray = tag ? [tag] : [];
    const categoryArray = category ? [category] : [];

    this.blogService.loadBlogsByCreationTime(
      categoryArray,
      tagArray,
      (this.page - 1) * this.itemsPerPage,
      this.itemsPerPage,
      this.searchTerm // Pass search term to the service
    );
  }
}
