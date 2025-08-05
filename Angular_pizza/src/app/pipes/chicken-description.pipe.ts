import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
