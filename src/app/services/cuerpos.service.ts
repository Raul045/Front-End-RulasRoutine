import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Cuerpos } from '../Models/cuerpos';

@Injectable({
  providedIn: 'root'
})
export class CuerposService {

  private URL_API = environment.apiURL+"/cuerpos"
  private get_one="/get_one"
  private get_all="/get_all"
  private update="/update"
  private enable="/enable"
  private disable="/disable"
  constructor(private http:HttpClient) { }

  getCuerpos():Observable<Cuerpos>{
    return this.http.get<Cuerpos>(this.URL_API+this.get_all)
  }

  getOneCuerpos(id:number,cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.put<Cuerpos>(`${this.URL_API}${this.get_one}/${id}`,cuerpos)
  }
  
  updateCuerpos(id:number,cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.put<Cuerpos>(`${this.URL_API}${this.update}/${id}`,cuerpos)
  }

  enableCuerpos(id:number,cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.put<Cuerpos>(`${this.URL_API}${this.enable}/${id}`,cuerpos)
  }

  disableCuerpos(id:number,cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.put<Cuerpos>(`${this.URL_API}${this.disable}/${id}`,cuerpos)
  }
}
