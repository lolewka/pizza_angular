import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenProducts'
})
export class ChickenProductsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
