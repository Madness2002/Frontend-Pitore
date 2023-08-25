import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import baseUrl from "../security/helper";
import {Pregunta} from "../../entities/Pregunta/pregunta";

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(public router: Router,private httpClient: HttpClient) { }

  public listar ():Observable<Pregunta[]>{
    return this.httpClient.get<Pregunta[]>(`${baseUrl}/pregunta/list`);
  }

  public listarPorId (id:number):Observable<Pregunta>{
    return this.httpClient.get<Pregunta>(`${baseUrl}/pregunta/buscar/`+id);
  }

}
