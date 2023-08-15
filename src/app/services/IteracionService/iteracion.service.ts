import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import baseUrl from "../security/helper";
import {Iteracion} from "../../entities/Iteracion/iteracion";

@Injectable({
  providedIn: 'root'
})
export class IteracionService {

  constructor(public router: Router,private httpClient: HttpClient) { }


public listar ():Observable<Iteracion[]>{
  return this.httpClient.get<Iteracion[]>(`${baseUrl}/iteracion/list`);
}

public listarPorId (id:number):Observable<Iteracion[]>{
  return this.httpClient.get<Iteracion[]>(`${baseUrl}/iteracion/buscar/`+id);
}

  public añadirIteracion(iteracion:Iteracion){
    iteracion.dIteracion= new Date();
    return this.httpClient.post<Iteracion>(`${baseUrl}/iteracion/insert`,iteracion);
  }

  public eliminarPorId (id:number){
    return this.httpClient.delete(`${baseUrl}/iteracion/delete/`+id);
  }
}
