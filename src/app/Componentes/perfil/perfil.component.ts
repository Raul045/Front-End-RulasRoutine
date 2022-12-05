import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{

  username: string = "Raul"
  lastname: string = "De los santos"
  age: string = "20"
  email: string = "anguianoraul@gmail.com"

  imgPerfil: string = "assets/Imagenes/Usuario-navbar.png"


  pesoAlInicio: string = "80kg";
  pesoActual: string = "60kg";


  constructor(private route: Router) { }

  goToEditPerfil(){
    this.route.navigate(['/editar-perfil'])
  }

  ngOnInit(): void {
  }

}
