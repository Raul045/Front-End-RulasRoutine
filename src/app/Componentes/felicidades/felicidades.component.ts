import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felicidades',
  templateUrl: './felicidades.component.html',
  styleUrls: ['./felicidades.component.css']
})
export class FelicidadesComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  feli: string = "assets/Imagenes/FELICIADES.png"

}
