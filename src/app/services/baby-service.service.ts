import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Baby} from "../entities/Baby";

@Injectable({
  providedIn: 'root'
})
export class BabyServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseURL= "http://localhost:8103/babies/list"

  obtenerBabies():Observable<Baby[]>{
return this.httpClient.get<Baby[]>(`${this.baseURL}`)


  }
}
