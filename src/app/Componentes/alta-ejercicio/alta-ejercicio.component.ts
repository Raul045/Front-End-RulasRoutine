import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-ejercicio',
  templateUrl: './alta-ejercicio.component.html',
  styleUrls: ['./alta-ejercicio.component.css']
})
export class AltaEjercicioComponent implements OnInit {

  constructor() { }
  /**
   * Imagenes y Variables
   */

  ejercicio: string = "assets/Imagenes/Resistencia.png";

  ngOnInit(): void {
  }

}
