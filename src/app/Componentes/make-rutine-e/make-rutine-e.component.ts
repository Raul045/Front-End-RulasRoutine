import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-make-rutine-e',
  templateUrl: './make-rutine-e.component.html',
  styleUrls: ['./make-rutine-e.component.css']
})
export class MakeRutineEComponent {

  constructor(private route: Router) { }
  /**
   * Imagenes y Variables
   */

  ejercicio_entrenador: string = "assets/Imagenes/Ejercicios.png";

  gotoEjercicios() {
    this.route.navigate(['/ejercicios'])
  }


  ngOnInit(): void {
  }

}
