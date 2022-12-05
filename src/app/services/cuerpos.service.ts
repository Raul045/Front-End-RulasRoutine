import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Cuerpos } from '../Models/cuerpos';

@Injectable({
  providedIn: 'root'
})
export class CuerposService {

  private URL_API = environment.apiURL
  private entity="cuerpos"
  constructor(private http:HttpClient) { }

  getCuerpos():Observable<Cuerpos>{
    return this.http.get<Cuerpos>(this.URL_API)
  }

  addCuerpos(cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.post<Cuerpos>(`${this.URL_API}${this.entity}`,cuerpos);
  }

  updateCuerpos(id:number,cuerpos:Cuerpos):Observable<Cuerpos>{
    return this.http.put<Cuerpos>(`${this.URL_API}${this.entity}/${id}`,cuerpos)
  }
}
