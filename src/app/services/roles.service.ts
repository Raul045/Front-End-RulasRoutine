import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Roles } from '../Models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private URL_API = environment.apiURL
  private entity="Roles"
  constructor(private http:HttpClient) { }

  getRoles():Observable<Roles>{
    return this.http.get<Roles>(this.URL_API)
  }

  addRoles(roles:Roles):Observable<Roles>{
    return this.http.post<Roles>(`${this.URL_API}${this.entity}`,roles);
  }

  updateRoles(id:number,roles:Roles):Observable<Roles>{
    return this.http.put<Roles>(`${this.URL_API}${this.entity}/${id}`,roles)
  }
}
