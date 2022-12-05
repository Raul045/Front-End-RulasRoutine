import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Pesos } from '../Models/pesos';

@Injectable({
  providedIn: 'root'
})
export class PesosService {

  private URL_API = environment.apiURL
  private entity="Pesos"
  constructor(private http:HttpClient) { }

  getPesos():Observable<Pesos>{
    return this.http.get<Pesos>(this.URL_API)
  }

  addPesos(pesos:Pesos):Observable<Pesos>{
    return this.http.post<Pesos>(`${this.URL_API}${this.entity}`,pesos);
  }

  updatePesos(id:number,pesos:Pesos):Observable<Pesos>{
    return this.http.put<Pesos>(`${this.URL_API}${this.entity}/${id}`,pesos)
  }
}
