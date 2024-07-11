import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, wordLimit = 10): string {
    if (!value) return '';

    const words = value.split(/\s+/);

    if (words.length <= wordLimit) {
      return value;
    }

    const truncatedWords = words.slice(0, wordLimit);
    return truncatedWords.join(' ') + '...';
  }
}
