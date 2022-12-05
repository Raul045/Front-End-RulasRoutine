import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-rutine',
  templateUrl: './make-rutine.component.html',
  styleUrls: ['./make-rutine.component.css']
})
export class MakeRutineComponent implements OnInit {

  constructor() { }

  /**
   * Imagenes
   */

  cuerpo: string = "assets/Imagenes/cuerpo.png";
  tipo: string = "assets/Imagenes/Tipo.png"

  ngOnInit(): void {
  }

}
