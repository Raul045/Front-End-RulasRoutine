import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pesos } from 'src/app/Models/pesos';
import { PesosService } from 'src/app/services/pesos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  peso:Pesos = new Pesos();
  pesoForm!: FormGroup;

  constructor(private pesoService : PesosService, private fb:FormBuilder) { }

  /**
   * Imagenes y Variables
   */

  ngOnInit(): void {
    this.createForm();
  }

  //Creación de formulario
  createForm():void{
    this.pesoForm=this.fb.group({
        peso: ['', Validators.required],
        //pendiente
    });
   }

  //obtener historial pesos
  getHistoryWeight(){
    this.pesoService.getPesos().subscribe((res)=>{
      console.log("pesos_ ", res);
      // función de seteo de valores ->
    })
  }

  //seteo de valores
  setWeightvalues(peso:Pesos){
    this.pesoForm?.get('peso')?.setValue(peso.peso);
  }

}
