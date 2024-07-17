import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {BlogDto, type BlogFilterDto, BlogTagDto, type CategoryWithBlogCount} from "~/proxy/resumes";
import {PagedResultDto} from "@abp/ng.core";
import {convertToHttpParams} from "~/core/util/convert";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogsByCreationTime = new BehaviorSubject<BlogDto[] | undefined>([]);
  private hotBlogs = new BehaviorSubject<BlogDto[] | undefined>([]);
  private blogCategories = new BehaviorSubject<CategoryWithBlogCount[] | undefined>([]);
  private blogTags = new BehaviorSubject<BlogTagDto[] | undefined>([]);

  constructor(private http: HttpClient) {
  }

  getBlogPosts(input: BlogFilterDto): Observable<PagedResultDto<BlogDto>> {
    const params = {
      includeDetails: input?.includeDetails,
      ["Filter.Id"]: input?.filter?.id,
      ["Filter.Title"]: input?.filter?.title,
      ["Filter.Context"]: input?.filter?.context,
      ["Filter.ContextType"]: input?.filter?.contextType,
      ["Filter.ViewCount"]: input?.filter?.viewCount,
      ["Filter.CommentsCount"]: input?.filter?.commentsCount,
      ["Filter.Images"]: input?.filter?.images,
      ["Filter.Categories"]: input.filter?.categories,
      ["Filter.Tags"]: input.filter?.tags,
      ["Filter.CreationTime"]: input?.filter?.creationTime,
      ["Filter.LastModificationTime"]: input?.filter?.lastModificationTime,
      sorting: input.sorting,
      skipCount: input.skipCount,
      maxResultCount: input.maxResultCount,
      categoryNames: input.categoryNames,
      tagNames: input.tagNames
    };

    return this.http.get<PagedResultDto<BlogDto>>('/api/app/blog/by-filter', {params: convertToHttpParams(params) as HttpParams});
  }

  getBlogCategory(sorting = 'creationTime DESC', skipCount = 0, maxResultCount = 10): Observable<CategoryWithBlogCount[]> {
    const params = new HttpParams()
      // .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());
    return this.http.get<CategoryWithBlogCount[]>('/api/app/blog-category/categories-with-blog-counts', {params});
  }

  getBlogTag(sorting = '', skipCount = 0, maxResultCount = 10): Observable<PagedResultDto<BlogTagDto>> {
    const params = new HttpParams()
      // .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());
    return this.http.get<PagedResultDto<BlogTagDto>>('/api/app/blog-tag', {params});
  }

  getOne(id: string): Observable<BlogDto> {
    return this.http.get<BlogDto>(`/api/app/blog/${id}`);
  }

  loadBlogsByCreationTime(categoryNames: string[], tagNames: string[]) {
    this.getBlogPosts({
      categoryNames: categoryNames, tagNames: tagNames,
      filter: {images: [], categories: [], tags: []},
      includeDetails: true,
      sorting: 'creationTime DESC',
      maxResultCount: 10
    }).subscribe(
      result => this.blogsByCreationTime.next(result.items)
    );
  }

  loadHotBlogs() {
    this.getBlogPosts({
      categoryNames: [], tagNames: [],
      sorting: 'viewCount DESC',
      filter: {images: [], categories: [], tags: []},
      includeDetails: true,
      maxResultCount: 5
    }).subscribe(
      result => this.hotBlogs.next(result.items)
    );
  }

  loadBlogCategories() {
    this.getBlogCategory().subscribe(
      result => this.blogCategories.next(result)
    );
  }

  loadBlogTags() {
    this.getBlogTag().subscribe(
      result => this.blogTags.next(result.items)
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
}
