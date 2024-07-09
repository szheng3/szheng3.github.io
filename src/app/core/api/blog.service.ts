import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BlogCategoryDto, BlogDto, BlogTagDto} from "~/proxy/resumes";
import type {PagedResultDto} from "@abp/ng.core";


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPostsSubject = new BehaviorSubject<BlogDto[] | undefined>([]);
  private blogPostSubject = new BehaviorSubject<BlogDto | undefined>({categories: [], images: [], tags: []});

  public blogPosts$ = this.blogPostsSubject.asObservable();
  private blogPost = this.blogPostSubject.asObservable();


  constructor(private http: HttpClient) {
  }

  getBlogPosts(
    sorting = 'creationTime DESC',
    skipCount = 0,
    maxResultCount = 10
  ): Observable<PagedResultDto<BlogDto>> {
    const params = new HttpParams()
      .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());

    return this.http.get<PagedResultDto<BlogDto>>('/api/app/blog', {params}).pipe(
      map(response => {
        this.blogPostsSubject.next(response.items);
        return response;
      })
    );
  }


  getBlogCategory(
    sorting = 'creationTime DESC',
    skipCount = 0,
    maxResultCount = 10
  ): Observable<PagedResultDto<BlogCategoryDto>> {
    const params = new HttpParams()
      .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());

    return this.http.get<PagedResultDto<BlogCategoryDto>>('/api/app/blog-category', {params}).pipe(
      map(response => {
        // this.blogPostsSubject.next(response.items);
        return response;
      })
    );
  }

  getBlogTag(
    sorting = 'creationTime DESC',
    skipCount = 0,
    maxResultCount = 10
  ): Observable<PagedResultDto<BlogTagDto>> {
    const params = new HttpParams()
      .set('Sorting', sorting)
      .set('SkipCount', skipCount.toString())
      .set('MaxResultCount', maxResultCount.toString());

    return this.http.get<PagedResultDto<BlogTagDto>>('/api/app/blog-tag', {params}).pipe(
      map(response => {
        // this.blogPostsSubject.next(response.items);
        return response;
      })
    );
  }

  getOne(
    id: string
  ): Observable<BlogDto> {


    return this.http.get<BlogDto>(`/api/app/blog/${id}`,).pipe(
      map(response => {
        this.blogPostSubject.next(response);
        return response;
      })
    );
  }

}
