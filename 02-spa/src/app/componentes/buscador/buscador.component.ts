import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      // console.log('Buscador params-> ',this._heroesService.buscarHeroes(params['termino']));
    })
  }
}
