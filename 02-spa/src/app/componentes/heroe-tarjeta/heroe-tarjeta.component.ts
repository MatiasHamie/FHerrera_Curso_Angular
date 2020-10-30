import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(idx: number) {
    console.log(idx);
    this._router.navigate(['/heroe', idx]);
  }

}
