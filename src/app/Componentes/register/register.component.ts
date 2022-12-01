import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { UsersService } from 'src/app/services/users.service';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService: UsersService, private router: Router) { }

  registerForm: FormGroup;
  user: Users;

  logo: string = "assets/Imagenes/LogoNegro.png";

  ngOnInit(): void {
     this.createForm();

  }

  createForm(): void
  {
    this.registerForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['',[Validators.required]],
      edad: ['',[Validators.required]],
    })
  }

  get nombreValidate()
  {
    return(
      this.registerForm.get('nombre')?.invalid && this.registerForm.get('nombre')?.touched
      );
  }

  get apellidoValidate()
  {
    return(
      this.registerForm.get('apellido')?.invalid && this.registerForm.get('apellido')?.touched
      );
  }


  get emailValidate(){
    return(
      this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched
      );
  }

  get passwordValidate()
  {
    return(
      this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched
      );
  }

  get edadValidate()
  {
    return(
      this.registerForm.get('edad')?.invalid && this.registerForm.get('edad')?.touched
      );
  }

  register(): void
  {
    if(this.registerForm.invalid)
    {
      return Object.values(this.registerForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    else
    {
      this.setUser();
      this.authService.register(this.user).subscribe((data:any) => {
          successDialog('Registro completado');
          this.router.navigate(['/login']);
      },error => {
        errorMessage('Ocurrio un error');
      })
    }
  }

  setUser():void
  {
    this.user = {
      name: this.registerForm.get('nombre')?.value,
      lastName: this.registerForm.get('apellido')?.value,
      age: this.registerForm.get('edad')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    }
  }

}
