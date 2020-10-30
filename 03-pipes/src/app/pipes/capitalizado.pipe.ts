import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  /* De esta forma, ya funciona, pones en el html
     dato | capitalizado y te aparece "hola mundo"

     en value es lo que esta a la izq del simbolo de pipe en el html
     lo que queremos transformar

     Ejemplo cualquiera en html:
     dato | capitalizado:1:true:'Hola'
     vemos que estamos mandando 3 parametros,
     y todos estan en la misma variable acumulados
      en args en forma de array

    si le hago un console.log(args) puedo ver q onda

  transform(value: unknown, ...args: unknown[]): string {
    return 'Hola mundo';
  }

    Tambien puedo sacar el...args y poner yo los parametros que quiero recibir
   transform(value: unknown, edad: number, activo: boolean, mensaje: string): string {
    return 'Hola mundo';
  }
  */

  transform(value: string, capitalizarTodas: boolean = true): string {

    //Paso todo a minuscula
    value = value.toLowerCase();

    //desde el html paso las palabras a un array
    let nombres = value.split(' ');

    if(capitalizarTodas){
      // te devuelve un array formateado recorriendo cada indice del array
      // primero descubre el nombre fernando,
      // despues herrera
      nombres = nombres.map( nombre => {
        // return primer letra en mayuscula + resto de la palabra
        return nombre[0].toUpperCase()+ nombre.substr(1);
      });
    } else {
      // nombres[0] primer nombre solamente
      // nombres[0][0] es el primer nombre en la primera pos
      // y despues de ese nombre, lo restante lo concateno
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    // Unimelos con un espacio
    return nombres.join(' ');
  }


  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
