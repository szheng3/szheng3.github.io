import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {
  transform(value: string | undefined): string {
    const tmp = document.createElement('DIV');
    if (typeof value === "string") {
      tmp.innerHTML = value;
    }
    return tmp.textContent || tmp.innerText || '';
  }
}
