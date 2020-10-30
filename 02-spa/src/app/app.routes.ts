import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HomeComponent } from "./componentes/home/home.component";

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'path' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
