import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {

  //Imagenes
  imguser: string = "assets/Imagenes/Usuario-navbar.png"
  imgNuevo: string = "assets/Imagenes/Nuevo.png"
  imgNovato: string = "assets/Imagenes/novato.png"
  imgPrincipiante: string = "assets/Imagenes/principiante.png"
  imgAvanzado: string = "assets/Imagenes/Avanzado.png"
  imgExperto: string = "assets/Imagenes/Experto.png"
  imgMaximus: string = "assets/Imagenes/Maximus.png"


  //variables para los if
  btnTexto: string = "¿Que niveles existen?"
  mos:boolean = false;
  //variables normales
  user: string = "Raul"  
  exp: string = "25";

  mostrarNiveles(){
    if(this.btnTexto == "¿Que niveles existen?"){
      this.mos = true;
      this.btnTexto = "Ocultar niveles";
    }else{
      this.btnTexto = "¿Que niveles existen?";
      this.mos = false;
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
