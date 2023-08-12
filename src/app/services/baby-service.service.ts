import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../entities/./usuario";

@Injectable({
  providedIn: 'root'
})
export class BabyServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseURL= "http://localhost:8103/babies/list"

  obtenerBabies():Observable<Usuario[]>{
return this.httpClient.get<Usuario[]>(`${this.baseURL}`)


  }
}
