import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import baseUrl from "../security/helper";
import {Observable} from "rxjs";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Usuario} from "../../entities/Usuario/usuario";

@Injectable({
  providedIn: 'root'
})
export class GrupoEvaluacionService {

  constructor(public router: Router,private httpClient: HttpClient) { }

  IrA(url:string): void{

    this.router.navigate([url])
  }

public listar ():Observable<GrupoEvaluacion[]>{
    return this.httpClient.get<GrupoEvaluacion[]>(`${baseUrl}/grupoevaluacion/list`);
}

  public listarPorId (id:number):Observable<GrupoEvaluacion>{
    return this.httpClient.get<GrupoEvaluacion>(`${baseUrl}/grupoevaluacion/buscar/`+id);
  }

  public añadirGrupoEvaluacion(grupo:GrupoEvaluacion){
    grupo.dGrupoEvaluacion= new Date();
    return this.httpClient.post<GrupoEvaluacion>(`${baseUrl}/grupoevaluacion/insert`,grupo);
  }

  public eliminarPorId (id:number){
    return this.httpClient.delete(`${baseUrl}/grupoevaluacion/delete/`+id);
  }

  public editarGrupoEvaluacion (grupo:GrupoEvaluacion){
    return this.httpClient.put(`${baseUrl}/grupoevaluacion/update/`+grupo.cGrupoEvaluacion,grupo);
  }
}
