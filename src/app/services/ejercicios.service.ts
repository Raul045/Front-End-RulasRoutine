import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Ejercicios } from '../Models/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private URL_API = environment.apiURL
  private entity="ejercicios"
  constructor(private http:HttpClient) { }

  getEjercicios():Observable<Ejercicios>{
    return this.http.get<Ejercicios>(this.URL_API)
  }

  addEjercicios(ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.post<Ejercicios>(`${this.URL_API}${this.entity}`,ejercicios);
  }

  updateEjercicios(id:number,ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.put<Ejercicios>(`${this.URL_API}${this.entity}/${id}`,ejercicios)
  }
}
