import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  standalone: true,
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: SafeHtml | string | undefined | null): string {
    if (value == null) {
      return '';
    }

    let htmlString: string;

    if (typeof value === 'string') {
      htmlString = value;
    } else {
      htmlString = this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
    }

    const tmp = document.createElement('DIV');
    tmp.innerHTML = htmlString;

    return tmp.textContent || tmp.innerText || '';
  }
}
