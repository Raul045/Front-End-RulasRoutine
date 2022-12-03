import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users2 } from 'src/app/Models/users';
import { UsersService } from 'src/app/services/users.service';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  user: Users2;

  constructor(private fb:FormBuilder, private authService: UsersService, private router: Router) { }

  logo: string = "assets/Imagenes/LogoNegro.png";

  ngOnInit(): void {
    this.createForm();

  }

  createForm(): void
  {
    this.LoginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  login(): void
  {
    if(this.LoginForm.invalid)
    {
      return Object.values(this.LoginForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    else
    {
      this.setUser();
      this.authService.login(this.user).subscribe((data:any) => {
        console.log(data.token);
        localStorage.setItem("token",data.token);
        successDialog('Iniciando...').then(() => {
            this.router.navigate(['/blog']);
        });
    },error => {
      errorMessage('Usuario o contraseña incorrecta');
    })
  }
}

  get emailValidate(){
    return(
      this.LoginForm.get('email')?.invalid && this.LoginForm.get('email')?.touched
      );
  }

  get passwordValidate()
  {
    return(
      this.LoginForm.get('password')?.invalid && this.LoginForm.get('password')?.touched
      );
  }

  setUser():void
  {
    this.user = {
      email: this.LoginForm.get('email')?.value,
      password: this.LoginForm.get('password')?.value,
    }
  }

}
