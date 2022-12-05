import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Rutina } from '../Models/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  private URL_API = environment.apiURL
  private entity="Rutina"
  constructor(private http:HttpClient) { }

  getRutina():Observable<Rutina>{
    return this.http.get<Rutina>(this.URL_API)
  }

  addRutina(rutina:Rutina):Observable<Rutina>{
    return this.http.post<Rutina>(`${this.URL_API}${this.entity}`,rutina);
  }

  updateRutina(id:number,rutina:Rutina):Observable<Rutina>{
    return this.http.put<Rutina>(`${this.URL_API}${this.entity}/${id}`,rutina)
  }
}
