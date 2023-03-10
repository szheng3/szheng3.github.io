import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'classArray'
})
export class ClassArrayPipe implements PipeTransform {
  transform(value:string[] | undefined, join: string, preString: string = ''): any {
    return value?.map(value1 => preString + value1).join(join);
  }
}
