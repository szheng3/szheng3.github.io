import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, of, tap} from 'rxjs';
import {BlogDto, BlogFilterDto, BlogTagDto, type CategoryWithBlogCount,} from '~/proxy/resumes';
import {PagedResultDto} from '@abp/ng.core';
import {convertToHttpParams} from '~/core/util/convert';

@Injectable({
  providedIn: 'root',
})
export class BlogStoreService {
  private blogsByCreationTime = new BehaviorSubject<PagedResultDto<BlogDto>>({
    items: [],
    totalCount: 0,
  });
  private hotBlogs = new BehaviorSubject<BlogDto[] | undefined>([]);
  private blogCategories = new BehaviorSubject<
    CategoryWithBlogCount[] | undefined
  >([]);
  private blogTags = new BehaviorSubject<BlogTagDto[] | undefined>([]);
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getBlogPosts(parameter: BlogFilterDto): Observable<PagedResultDto<BlogDto>> {
    const params = {
      ["Filter.SearchTerm"]: parameter.searchTerm,
      ["Filter.SearchMode"]: parameter.searchMode,
      ["Filter.Title"]: parameter.title,
      ["Filter.CategoryNames"]: parameter.categoryNames,
      ["Filter.TagNames"]: parameter.tagNames,
      ["Filter.Sorting"]: parameter.sorting,
      ["Filter.SkipCount"]: parameter.skipCount,
      ["Filter.MaxResultCount"]: parameter.maxResultCount,
    };

    // this.blogService.getListByFilter(input).subscribe(
    return this.http.get<PagedResultDto<BlogDto>>('/api/app/blog/by-filter', {
      params: convertToHttpParams(params) as HttpParams,
    });
  }

  getBlogCategory(
    sorting = 'creationTime DESC',
    skipCount = 0,
    maxResultCount = 10
  ): Observable<CategoryWithBlogCount[]> {
    const params = new HttpParams()
      // .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());
    return this.http.get<CategoryWithBlogCount[]>(
      '/api/app/blog-category/categories-with-blog-counts',
      {params}
    );
  }

  getBlogTag(
    sorting = '',
    skipCount = 0,
    maxResultCount = 10
  ): Observable<PagedResultDto<BlogTagDto>> {
    const params = new HttpParams()
      // .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());
    return this.http.get<PagedResultDto<BlogTagDto>>('/api/app/blog-tag', {
      params,
    });
  }

  getOne(id: string): Observable<BlogDto> {
    return this.http.get<BlogDto>(`/api/app/blog/${id}`);
  }

  loadBlogsByCreationTime(
    categoryNames: string[],
    tagNames: string[],
    skipCount: number,
    maxResultCount: number,
    searchTerm?: string
  ): Observable<PagedResultDto<BlogDto>> {
    return this.getBlogPosts({
      searchMode: false,
      searchTerm: searchTerm,
      categoryNames: categoryNames,
      tagNames: tagNames,
      sorting: 'creationTime DESC',
      maxResultCount: maxResultCount,
      skipCount: skipCount,
    }).pipe(
      tap((result) => {
        this.blogsByCreationTime.next(result);
      }),
      catchError((error) => {
        console.error('Error loading blogs:', error);
        return of({items: [], totalCount: 0});
      })
    );
  }

  loadHotBlogs(): Observable<PagedResultDto<BlogDto>> {
    return this.getBlogPosts({
      searchMode: false,
      categoryNames: [],
      tagNames: [],
      sorting: 'viewCount DESC',
      maxResultCount: 5,
      skipCount: 0,
    }).pipe(
      tap((result) => {
        this.hotBlogs.next(result.items);
      })
    );
  }


  loadBlogCategories(): Observable<CategoryWithBlogCount[]> {
    return this.getBlogCategory().pipe(
      tap((result) => {
        this.blogCategories.next(result);
      })
    );
  }

  loadBlogTags(): Observable<PagedResultDto<BlogTagDto>> {
    return this.getBlogTag().pipe(
      tap((result) => {
        this.blogTags.next(result.items);
      })
    );
  }

  getBlogsByCreationTime$() {
    return this.blogsByCreationTime.asObservable();
  }

  getHotBlogs$() {
    return this.hotBlogs.asObservable();
  }

  getBlogCategories$() {
    return this.blogCategories.asObservable();
  }

  getBlogTags$() {
    return this.blogTags.asObservable();
  }

  getIsLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
}
