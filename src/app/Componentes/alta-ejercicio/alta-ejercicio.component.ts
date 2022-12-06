import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ejercicios } from 'src/app/Models/ejercicios';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-alta-ejercicio',
  templateUrl: './alta-ejercicio.component.html',
  styleUrls: ['./alta-ejercicio.component.css']
})
export class AltaEjercicioComponent implements OnInit {
  ejerciciosForm!: FormGroup;
  ejercicios:Ejercicios = new Ejercicios();

  constructor(private ejeService: EjerciciosService, private fb: FormBuilder) { }
  /**
   * Imagenes y Variables
   */

  ejercicio: string = "assets/Imagenes/Resistencia.png";
 

  ngOnInit(): void {
    this.getEjercicios();
    this.createForm();
  }

  getEjercicios(){
    this.ejeService.getEjercicios().subscribe(res=>{
      console.log("res", res); 
    })
  }


 //Creación de formulario
  createForm():void{
   this.ejerciciosForm=this.fb.group({
       name: ['', Validators.required],
       description: ['', Validators.required],
       //email: ['',Validators.required],
   });
  }

  //Setear los valores modelo - form
  setExeciseValues(){
        if(this.ejerciciosForm.valid){
            this.ejercicios.name=this.ejerciciosForm.get('name')!.value
            this.ejercicios.description=this.ejerciciosForm.get('description')!.value
        }else{
            console.log("Error ... seteo formulario");   
        }   
    }

 //crear registro ejercicio
  createExercise(){
    this.setExeciseValues();
    this.ejeService.addEjercicios(this.ejercicios).subscribe({
        next : (r)=>{
            if(r){
                console.log(r)
                this.ejerciciosForm.reset()  
            }
        },
        error : ()=>{
        } 
    }); 
 }

 //resetear form
 restoreForm(){
  this.ejerciciosForm.reset()
 }
 
}
