import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

/*
  Pasos para traducir a un idioma de forma GLOBAL en la app
  (o sea que todo se va a cambiar a un idioma)
  1-> import { registerLocaleData } from "@angular/common";
  2-> import elNombreQueQuiera from "@angular/common/locales/es";
  3-> registerLocaleData(elNombreQueQuiera (el mismo que puse arriba), parametroOpcional (no le di pelota))
  4-> import { LOCALE_ID } from '@angular/core';
  5-> providers: [
    provide:L LOCALE_ID,
    useValue: 'es'
  ]


*/
import { registerLocaleData } from "@angular/common";

// Aca registro el idioma español a la aplicacion
import localEs from "@angular/common/locales/es";
registerLocaleData(localEs)

// Aca registro el idioma frances a la aplicacion
import localFr from "@angular/common/locales/fr";
registerLocaleData(localFr)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AsteriscosPipe } from './pipes/asteriscos.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    AsteriscosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
