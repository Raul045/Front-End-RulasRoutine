import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-entrenadores',
  templateUrl: './alta-entrenadores.component.html',
  styleUrls: ['./alta-entrenadores.component.css']
})
export class AltaEntrenadoresComponent implements OnInit {

  constructor() { }
  /**
   * Imagenes y Variables
   */

  user: string = "assets/Imagenes/usuario.png";

  ngOnInit(): void {
  }

}
