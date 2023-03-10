import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'linkMap'
})
export class LinkMapPipe implements PipeTransform {
  transform(value: "WEB" | "YOUTUBE" | "GIT", ...args: any[]): any {
    const map = {
      WEB: 'fa-link',
      YOUTUBE: 'fa-youtube',
      GIT: 'fa-github'
    };
    return map[value];
  }
}
