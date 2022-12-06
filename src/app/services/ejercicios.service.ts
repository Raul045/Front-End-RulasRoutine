import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Ejercicios } from '../Models/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private URL_API = environment.apiURL+"ejercicios"
  private get_all="/get_all"
  private add_exercise="/add_exercise"
  private update_ejercise="/update_ejercise"
  private enable="/enable"
  private disable="/disable"
  private get_all_enabled="/get_all_enabled"
  private get_all_disable="/get_all_disabled"
  constructor(private http:HttpClient) { }

  getEjercicios():Observable<Ejercicios>{
    return this.http.get<Ejercicios>(this.URL_API+this.get_all)
  }

  getEnableEjercicios():Observable<Ejercicios>{
    return this.http.get<Ejercicios>(this.URL_API+this.get_all_enabled)
  }

  getDisabledEjercicios():Observable<Ejercicios>{
    return this.http.get<Ejercicios>(this.URL_API+this.get_all_disable)
  }

  addEjercicios(ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.post<Ejercicios>(`${this.URL_API}${this.add_exercise}`,ejercicios);
  }

  updateEjercicios(id:number,ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.put<Ejercicios>(`${this.URL_API}${this.update_ejercise}/${id}`,ejercicios)
  }

  enableEjercicios(id:number,ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.put<Ejercicios>(`${this.URL_API}${this.enable}/${id}`,ejercicios)
  }

  disableEjercicios(id:number,ejercicios:Ejercicios):Observable<Ejercicios>{
    return this.http.put<Ejercicios>(`${this.URL_API}${this.disable}/${id}`,ejercicios)
  }
}
