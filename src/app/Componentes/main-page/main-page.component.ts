import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'RulasRutine';
  logo: string = "assets/Imagenes/logo.png";
  logoIcon: string = "assets/Imagenes/logo-icon.ico"
  DescripcionEjercicio:string = "assets/Imagenes/DescripEjercicio.png";
  EjercicioRelleno:string = "assets/Imagenes/EjercicioRelleno.jpg";
  Ejercicios:string = "assets/Imagenes/Ejercicios.jpg";
  Equilibrio:string = "assets/Imagenes/Equilibrio.png";
  Estirando:string = "assets/Imagenes/Estirando.jpg";
  facebook:string = "assets/Imagenes/facebook.png";
  Flexibilidad:string = "assets/Imagenes/Flexibilidad.png";
  Fortalecimiento:string = "assets/Imagenes/Fortalecimiento.png";
  Twiter:string = "assets/Imagenes/gorjeo.png";
  images:string = "assets/Imagenes/images.jpeg";
  instagram:string = "assets/Imagenes/instagram.png";
  LogoNegro:string = "assets/Imagenes/LogoNegro.png";
  Relleno1:string = "assets/Imagenes/Relleno1.jpg";
  Relleno2:string = "assets/Imagenes/Relleno2.jpg";
  Resistencia:string = "assets/Imagenes/Resistencia.png";
  Usuario1:string = "assets/Imagenes/Usuario1.jpg";
  Usuario2:string = "assets/Imagenes/Usuario2.jpg";
  Usuario3:string = "assets/Imagenes/Usuario3.jpg";
  youtube:string = "assets/Imagenes/youtube.png";

}
