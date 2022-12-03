import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutine-ejercicios',
  templateUrl: './rutine-ejercicios.component.html',
  styleUrls: ['./rutine-ejercicios.component.css']
})

export class RutineEjerciciosComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  console = console;

  pageActual: number = 1;
  
  responsiveP: boolean = true;

  tipoEjercicio:any[] = [
    {
      "tipo":"Brazo"
    }
  ]

  ejercicio:any[] = [
    {
      "id":1,
      "name": "Flexiones",
      "descripcion": "Puedes hacer esta variación de push ups con las rodillas, si lo necesitas. El nombre del ejercicio, “2-2-2”, se refiere a 3 sets de 2 flexiones que vas a hacer poniendo las manos en distintas posiciones: cerca del cuerpo, normal y alejadas del cuerpo.",
      "images":"assets/Imagenes/EjercicioRelleno.jpg",
      "serie": 2,
      "repeticiones":15
    },
    {
      "id":2,
      "name": "Plancha",
      "descripcion": "Puedes hacer esta variación de push ups con las rodillas, si lo necesitas. El nombre del ejercicio, “2-2-2”, se refiere a 3 sets de 2 flexiones que vas a hacer poniendo las manos en distintas posiciones: cerca del cuerpo, normal y alejadas del cuerpo.",
      "images":"assets/Imagenes/EjercicioRelleno.jpg",
      "serie": 2,
      "repeticiones":15
    },{
      "id":3,
      "name": "Abdominales",
      "descripcion": "Puedes hacer esta variación de push ups con las rodillas, si lo necesitas. El nombre del ejercicio, “2-2-2”, se refiere a 3 sets de 2 flexiones que vas a hacer poniendo las manos en distintas posiciones: cerca del cuerpo, normal y alejadas del cuerpo.",
      "images":"assets/Imagenes/EjercicioRelleno.jpg",
      "serie": 2,
      "repeticiones":15
    },
    {
      "id":4,
      "name": "Lagartijas",
      "descripcion": "Puedes hacer esta variación de push ups con las rodillas, si lo necesitas. El nombre del ejercicio, “2-2-2”, se refiere a 3 sets de 2 flexiones que vas a hacer poniendo las manos en distintas posiciones: cerca del cuerpo, normal y alejadas del cuerpo.",
      "images":"assets/Imagenes/EjercicioRelleno.jpg",
      "serie": 2,
      "repeticiones":15
    },
    
    
  ]


  RutinaTerminada (){
    if(this.pageActual == this.ejercicio.length){
      this.router.navigate(['/felicidades'])
    }
  }

}
