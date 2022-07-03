import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'myOwnPipe'
})
export class MyOwnPipePipe implements PipeTransform {

  transform(value: string) {
    return value.toUpperCase();
    }

}
