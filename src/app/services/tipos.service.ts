import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Tipos } from '../Models/tipos';
@Injectable({
  providedIn: 'root'
})
export class TiposService {

  private URL_API = environment.apiURL
  private entity="Tipos"
  constructor(private http:HttpClient) { }

  getTipos():Observable<Tipos>{
    return this.http.get<Tipos>(this.URL_API)
  }

  addTipos(tipos:Tipos):Observable<Tipos>{
    return this.http.post<Tipos>(`${this.URL_API}${this.entity}`,tipos);
  }

  updateTipos(id:number,tipos:Tipos):Observable<Tipos>{
    return this.http.put<Tipos>(`${this.URL_API}${this.entity}/${id}`,tipos)
  }
}
