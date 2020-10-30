import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Capitan America'
  nombre2: string = 'FerNandO hERRerA'
  array = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string> ( (resolve) => {
    setTimeout(() => {
      resolve('Llego la info')
    }, 4500);
  })

  // Solamente con crear un date sin argumentos para el ctor, te crea esto en pantalla
  // Tue Oct 27 2020 10:42:30 GMT-0300 (hora estándar de Argentina)
  // con el | date queda Oct 27,2020
  fecha: Date = new Date();

  varIdioma: string;

  videoUrl: string = 'https://www.youtube.com/embed/4TXc2jmhBIw';

  nombreAsteriscos: string = 'Matias Hamie'
  activar: boolean = true;
}
