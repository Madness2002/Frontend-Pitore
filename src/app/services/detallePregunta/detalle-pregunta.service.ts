import {Injectable, numberAttribute} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import baseUrl from "../security/helper";
import {DetallePregunta} from "../../entities/DetallePregunta/detalle-pregunta";
import {Observable} from "rxjs";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {Pregunta} from "../../entities/Pregunta/pregunta";

@Injectable({
  providedIn: 'root'
})
export class DetallePreguntaService {
  iteracion:Iteracion;
  pregunta:Pregunta;
  detallePreguntas:DetallePregunta[]=[];
  constructor(public router: Router,private httpClient: HttpClient) { }
  public InsertarDetallePregunta(detallePregunta:DetallePregunta){

    return this.httpClient.post<DetallePregunta>(`${baseUrl}/detalle/insert`,{
      iteracion:detallePregunta.iteracion,
      pregunta:detallePregunta.pregunta,
      tRespuestaPregunta:detallePregunta.tRespuestaPregunta,
      dDetallePregunta:detallePregunta.dDetallePregunta,
      fDetallePregunta:detallePregunta.fDetallePregunta
    },{headers:{'Content-Type':'application/json'}});
  }
  public listar ():Observable<DetallePregunta[]>{
    return this.httpClient.get<DetallePregunta[]>(`${baseUrl}/detalle/list`);
  }
  public listarPorIdIteracion (idIteracion:number):Observable<DetallePregunta[]>{
    return this.httpClient.get<DetallePregunta[]>(`${baseUrl}/detalle/list/`+idIteracion);
  }
  public listarPorId (id:number):Observable<DetallePregunta>{
    return this.httpClient.get<DetallePregunta>(`${baseUrl}/detalle/buscar/`+id);
  }

  public cargarResultados(_idoneidad:number,_usabilidad:number,_rendimiento:number,_cIteracion:number){

    this.listarPorIdIteracion(_cIteracion).subscribe(dato=>{this.detallePreguntas=dato;console.log(this.detallePreguntas);})

    let nominador=0;
    let denominador=0;
    //IDONEIDAD
    for (let i=0;i<6;i++)
    {
      nominador+=this.detallePreguntas[i].tRespuestaPregunta;
    }

    for (let i=6;i<12;i++)
    {
      denominador+=this.detallePreguntas[i].tRespuestaPregunta;
    }
    _idoneidad=(nominador/denominador)*100;

    //USABILIDAD
    for (let i=12;i<30;i++)
    {
      _usabilidad+=(this.detallePreguntas[i].tRespuestaPregunta/(18*7))*100;
    }
    //RENDIMIENTO
    _rendimiento=this.detallePreguntas[30].tRespuestaPregunta*100;
  }
}
