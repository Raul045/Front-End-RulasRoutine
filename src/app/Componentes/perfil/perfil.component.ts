import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{

  username: string = "Oscar"
  lastname: string = "Martines"
  age: string = "20"
  email: string = "oscar@gmail.com"

  imgPerfil: string = "assets/Imagenes/Usuario-navbar.png"
  
  pesoActual: string = "60kg";


  constructor(private route: Router) { }

  goToEditPerfil(){
    this.route.navigate(['/editar-perfil'])
  }

  ngOnInit(): void {
  }

}
