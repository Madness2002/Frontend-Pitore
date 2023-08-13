import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import baseUrl from "../security/helper";
import {Observable} from "rxjs";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";

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


}
