import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit {

  constructor() { }

  usuarios:any [] = [
    {
      "id":1,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":2,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":3,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":4,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":5,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":6,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":7,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":8,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":9,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":10,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":11,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":12,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":13,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },
    {
      "id":14,
      "nombre": "Manuel",
      "apellido": "Zamora Tovar",
      "edad": 23,
      "email": "ejemplo@gmail.com",
      "experiencia": 3,
      "rol": "usuario"
    },]

  ngOnInit(): void {
  }

}
