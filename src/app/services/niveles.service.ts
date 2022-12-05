import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Niveles } from '../Models/niveles';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  private URL_API = environment.apiURL
  private entity="niveles"
  constructor(private http:HttpClient) { }

  getNiveles():Observable<Niveles>{
    return this.http.get<Niveles>(this.URL_API)
  }

  addNiveles(niveles:Niveles):Observable<Niveles>{
    return this.http.post<Niveles>(`${this.URL_API}${this.entity}`,niveles);
  }

  updateNiveles(id:number,niveles:Niveles):Observable<Niveles>{
    return this.http.put<Niveles>(`${this.URL_API}${this.entity}/${id}`,niveles)
  }
}
