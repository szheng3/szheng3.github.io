import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { ICards } from 'src/app/pages/main/component/portfolios/portfolios.component';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {
  transform(card: ICards[], ...args: any[]): any {
    return _(card)
      .flatMap(value => value.tags)
      .map(value => value.toLowerCase())
      .uniq()
      .value();
  }
}
