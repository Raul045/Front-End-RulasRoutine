import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Users, Users2 } from '../Models/users';
import { environment } from 'src/environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL;
  jwtHelper: JwtHelperService = new JwtHelperService();
  header = new HttpHeaders({'Type': 'application/json'});



  constructor(private http: HttpClient, private router:Router) { }


  login(users:Users2):Observable<any>
  {
    return this.http.post(`${this.apiURL}usr/log_in`, users);
  }

  register(users:Users):Observable<any>
  {
    return this.http.post(`${this.apiURL}usr/sign_in`, users);
  }

  mostarUsuarios():Observable<any>
  {
      return  this.http.get(`${this.apiURL}usr/get_all`);
  }



}



  // private guardarToken(token: string): void
  // {
  //   localStorage.setItem('token', token);
  //   this.token = token;
  // }

  // public getToken(): string
  // {

  //   if (!this.token) {
  //     this.token = localStorage.getItem('token') || '';
  //   }

  //   return this.token;
  // }

  // public logout(): void
  // {
  //   this.token = ""
  //   window.localStorage.removeItem('token')
  //   this.router.navigate(['/login']);

  // }

}
