import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {
  transform(card: any[], ...args: any[]): any {
    return _(card)
      .flatMap(value => value.tags)
      .map(value => value?.toLowerCase())
      .uniq()
      .value();
  }
}
