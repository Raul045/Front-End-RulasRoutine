import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Niveles } from '../Models/niveles';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  private URL_API = environment.apiURL+"/levels"
  private getAll="get_all"
  private get_one="get_one/"
  private update="update/"
  private disable="disable/"
  private enable="enable/"
  private get_user_level="get_user_level"
  constructor(private http:HttpClient) { }

  getNiveles():Observable<Niveles>{
    return this.http.get<Niveles>(`${this.URL_API}${this.getAll}`)
  }

  addNiveles(niveles:Niveles):Observable<Niveles>{
    return this.http.post<Niveles>(`${this.URL_API}${this.getAll}`,niveles);
  }

  disableNiveles(id:number,niveles:Niveles):Observable<Niveles>{
    return this.http.post<Niveles>(`${this.URL_API}${this.disable}/${id}`,niveles);
  }

  enableNiveles(id:number,niveles:Niveles):Observable<Niveles>{
    return this.http.post<Niveles>(`${this.URL_API}${this.enable}/${id}`,niveles);
  }

  updateNiveles(id:number,niveles:Niveles):Observable<Niveles>{
    return this.http.put<Niveles>(`${this.URL_API}${this.update}/${id}`,niveles)
  }
}
