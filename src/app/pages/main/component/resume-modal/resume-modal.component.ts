import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.scss']
})
export class ResumeModalComponent implements OnInit {
  isBrowser=isPlatformBrowser(this.platformId);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}
}
