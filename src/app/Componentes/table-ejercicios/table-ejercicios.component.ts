import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ejercicios',
  templateUrl: './table-ejercicios.component.html',
  styleUrls: ['./table-ejercicios.component.css']
})
export class TableEjerciciosComponent implements OnInit {

  constructor() { }

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
