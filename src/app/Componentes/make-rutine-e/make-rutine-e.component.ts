import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-rutine-e',
  templateUrl: './make-rutine-e.component.html',
  styleUrls: ['./make-rutine-e.component.css']
})
export class MakeRutineEComponent implements OnInit {

  constructor() { }
  /**
   * Imagenes y Variables
   */

  ejercicio_entrenador: string = "assets/Imagenes/Ejercicios.png";


  ngOnInit(): void {
  }

}
