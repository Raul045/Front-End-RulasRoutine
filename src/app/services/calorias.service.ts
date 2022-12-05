import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Calorias } from '../Models/calorias';

@Injectable({
  providedIn: 'root'
})
export class CaloriasService {
  private URL_API = environment.apiURL
  private entity = 'calorias'

  constructor(private http:HttpClient){}


  getCalorias():Observable<Calorias>{
      return this.http.get<Calorias>(this.URL_API+this.entity)
  }

  postCalorias(calorias:Calorias):Observable<Calorias>{
      return this.http.post<Calorias>(this.URL_API+this.entity,calorias)
  }

  uptadeCalorias(calorias:Calorias,id:number):Observable<Calorias>{
      return this.http.put<Calorias>(this.URL_API+this.entity+"/"+id,calorias)
  }

}
