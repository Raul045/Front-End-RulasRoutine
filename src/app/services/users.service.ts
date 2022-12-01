import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../Models/users';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router:Router) { }

  register(users:Users):Observable<any>
  {
    return this.http.post(`${this.apiURL}usr/sign_in`, users);
  }

}
