import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/Models/users';
import { Roles } from 'src/app/Models/roles';

@Component({
  selector: 'app-alta-entrenadores',
  templateUrl: './alta-entrenadores.component.html',
  styleUrls: ['./alta-entrenadores.component.css']
})
export class AltaEntrenadoresComponent implements OnInit {
  users:Users = new Users();
  roles:Roles = new Roles();
  usersForm!:FormGroup;

  constructor(private usService:UsersService, private rolService:RolesService,private fb: FormBuilder) { }
  /**
   * Imagenes y Variables
   */

  user: string = "assets/Imagenes/usuario.png";

  ngOnInit(): void {
    this.createForm();
  }

  //get roles 
  getRoles(){
    this.rolService.getRoles().subscribe((r)=>{
      console.log("roles_ ", r);
    })
  }

  //Creación de formulario
  createForm():void{
    this.usersForm=this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        age:['',Validators.required, Validators.min(18)],
        email: ['',Validators.required,Validators.email],
    });
   }
 
   //Setear los valores modelo - form
   setUserValues(){
         if(this.usersForm.valid){
             this.users.name=this.usersForm.get('name')!.value
             this.users.lastName=this.usersForm.get('lastName')!.value
             this.users.age=this.usersForm.get('age')?.value
             this.users.email=this.usersForm.get('email')?.value
         }else{
             console.log("Error ... seteo formulario");   
         }   
     }
 
  //crear registro ejercicio
   createUser(){
   //  this.setUserValues();
   //  this.usService.addUser(this.user).subscribe({
   //      next : (r)=>{
   //          if(r){
   //              console.log(r)
   //              this.usersForm.reset()  
   //          }
   //      },
   //      error : ()=>{
   //      } 
   //  }); 
  }
 
  //resetear form
  restoreForm(){
   this.usersForm.reset()
  }
 

}
