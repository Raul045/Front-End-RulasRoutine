import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutine-resume',
  templateUrl: './rutine-resume.component.html',
  styleUrls: ['./rutine-resume.component.css']
})
export class RutineResumeComponent{

  constructor(private router: Router) {}
  /**
   * Imagenes
   */

  ejercicios = "assets/Imagenes/Fortalecimiento.png"

  goToRutina() {
    this.router.navigate(['/ejercicios-rutina']);
  }

  ngOnInit(): void {
  }

  ejercicio:any[] = [
    {
      "id":1,
      "name": "Push Ups",
      "serie": 2,
      "repeticiones":15
    },
    {
      "id":2,
      "name": "Sentadillas",
      "serie": 3,
      "repeticiones":10
    },
    {
      "id":3,
      "name": "Push Ups",
      "serie": 2,
      "repeticiones":15
    },
    {
      "id":4,
      "name": "Push Ups",
      "serie": 2,
      "repeticiones":15
    }
  ]

}
