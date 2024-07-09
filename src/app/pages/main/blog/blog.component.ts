import {Component, OnInit} from '@angular/core';
import {BlogService} from "~/core/api/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getBlogPosts().subscribe((data) => {
      console.log(data);
    });
  }
}
