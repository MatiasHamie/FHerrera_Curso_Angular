import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscos'
})
export class AsteriscosPipe implements PipeTransform {

  transform(palabra: string, activar: boolean): string {
    // return (activar) ? palabra.replace(/./gi, '*') : palabra;
    return (activar) ? '*'.repeat(palabra.length) : palabra;
  }

}
