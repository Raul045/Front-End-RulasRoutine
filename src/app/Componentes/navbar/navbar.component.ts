import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  username: string = "Oscar"
  nivel: string = "Nuevo"

  userN: boolean = true;
  admin: boolean = false;

  logueado:boolean = true;
  sinSesion:boolean = false; 

  title = 'RulasRutine';
  logo: string = "assets/Imagenes/logo.png";
  user: string = "assets/Imagenes/Usuario-navbar.png"
  perfil: string = "assets/Imagenes/perfil.png"
  salir: string = "assets/Imagenes/salir.png"
  exp: string = "assets/Imagenes/nivel.png"
  RutinasAdmin: string = "assets/Imagenes/RutinasAdmin.png"
  EntrenadorAdmin: string = "assets/Imagenes/EntrenadoresAdmin.png"
  EjercicioAdmin: string = "assets/Imagenes/EjercicioAdmin.png"

  contador: number = 0;

  goToLogin() {
    this.router.navigate(['/login']);
  }

  gotoPerfil(){
    this.router.navigate(['/perfil'])
  }

  gotoNiveles(){
    this.router.navigate(['/niveles'])
  }

  gotoUsers(){
    this.router.navigate(['/usuarios'])
  }
  gotoEjercicios(){
    this.router.navigate(['/ejercicios'])
  }
  gotoMakeRutina(){
    this.router.navigate(['/crear-rutina-entrenador'])
  }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  ngOnInit(): void {}

  mostrar: boolean = false;

  mostrarMenu() {
    if(this.contador == 0){
      this.mostrar = true;
      this.contador = 1;

    }
    else{
      this.mostrar = false;
      this.contador = 0;
    }
  }

}
