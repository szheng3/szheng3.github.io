import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) return '';

    if (value.length <= limit) {
      return value;
    }

    return value.slice(0, limit) + '...';
  }
}
