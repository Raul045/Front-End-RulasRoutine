import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-table-ejercicios',
  templateUrl: './table-ejercicios.component.html',
  styleUrls: ['./table-ejercicios.component.css']
})
export class TableEjerciciosComponent {

  constructor(private route: Router) { }

  goToAddEjercicios(){
    this.route.navigate(['/alta-ejercicio'])
  }
  ejercicios: any[] = [
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },

    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
    {
      "id": 1,
      "nombre": "Push Up",
      "description": "Lagartijas",
    },
  ];

  public page!: number;

  ngOnInit(): void {
  }

}
