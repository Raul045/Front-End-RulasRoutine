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
  user: string = "Oscar"  
  exp: string = "25";
  info: string = "";

  mostrarNiveles(){
    if(this.btnTexto == "¿Que niveles existen?"){
      this.mos = true;
      this.btnTexto = "Ocultar niveles";
    }else{
      this.btnTexto = "¿Que niveles existen?";
      this.mos = false;
    }
  }

  infoNiveles(nivel: string){
    if(nivel == "Nuevo"){
      this.info = "este nivel es el de nuevo"
    }
    else if(nivel == "Novato"){
      this.info = "este nivel es el de Novato"
    }
    else if(nivel == "Principiante"){
      this.info = "este nivel es el de Principiante"
    }
    else if(nivel == "Avanzado"){
      this.info = "este nivel es el de Avanzado"
    }
    else if(nivel == "Experto"){
      this.info = "este nivel es el de Experto"
    }
    else if(nivel == "Maximus"){
      this.info = "este nivel es el de Maximum"
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
