import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutine-resume',
  templateUrl: './rutine-resume.component.html',
  styleUrls: ['./rutine-resume.component.css']
})
export class RutineResumeComponent implements OnInit {

  constructor() { }

  /**
   * Imagenes
   */

  ejercicios = "assets/Imagenes/Fortalecimiento.png"

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
