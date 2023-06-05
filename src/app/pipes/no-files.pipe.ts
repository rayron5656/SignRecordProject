import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noFiles'
})
export class NoFilesPipe implements PipeTransform {

  transform(value: any): unknown {
    return null;
  }

}
