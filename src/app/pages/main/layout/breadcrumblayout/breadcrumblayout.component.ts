import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumblayout',
  templateUrl: './breadcrumblayout.component.html',
  styleUrls: ['./breadcrumblayout.component.css']
})
export class BreadcrumblayoutComponent implements OnInit {
  @Input()
  title: string = "";

  constructor() {
  }

  ngOnInit() {
  }
}
