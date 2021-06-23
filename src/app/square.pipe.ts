import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(n: number, ...args: unknown[]):number {
    return n*n;
  }

}
