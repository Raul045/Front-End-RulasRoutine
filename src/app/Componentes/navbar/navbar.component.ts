import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../../styles.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  title = 'RulasRutine';
  logo: string = "assets/Imagenes/logo.png";

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
