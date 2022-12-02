import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-peso',
  templateUrl: './registrar-peso.component.html',
  styleUrls: ['./registrar-peso.component.css']
})
export class RegistrarPesoComponent implements OnInit {

  //** Variables */

  logo: string = "assets/Imagenes/LogoNegro.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToRegisterWeight() {

  }

}
