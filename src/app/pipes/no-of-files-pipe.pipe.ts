import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOfFilesPipe'
})
export class NoOfFilesPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value == "noFiles") {
      return "No. Files";
    }
    if (value == "updatedAt") {

      return "updated at";
    }
    if (value == "updatedBy") {
      return "updated by";
    }
    return value;
  }

}
