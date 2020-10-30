import { Pipe, PipeTransform } from '@angular/core';

// importamos esto
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  // El tipo de dato devuelto lo saque de hacerle un hover
  // al metodo bypass bla bla y te dice, copie pegue
  transform(url: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url );
  }

}
