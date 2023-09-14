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
  detallePreguntas:DetallePregunta[];
  nominador:number= {} as number;
  denominador:number= {} as number;
  constructor(public router: Router,private httpClient: HttpClient) {

  }
  public InsertarDetallePregunta(detallePregunta:DetallePregunta){
console.log(detallePregunta.iteracion);
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

  public listarPorIdIteracionV2 (idIteracion:number){
    this.httpClient.get<DetallePregunta[]>(`${baseUrl}/detalle/list/`+idIteracion);
  }
  public listarPorId (id:number):Observable<DetallePregunta>{
    return this.httpClient.get<DetallePregunta>(`${baseUrl}/detalle/buscar/`+id);
  }

  public cargarResultadosIdoneidad(detallePreguntas:DetallePregunta[]) {
      console.log(detallePreguntas);
      this.nominador = 0.0;
      this.denominador = 0.0;
      //IDONEIDAD
      for (let i = 0; i < 6; i++) {
        this.denominador += detallePreguntas[i].tRespuestaPregunta;
        console.log("nomidador:" + this.nominador);
      }

      for (let i = 6; i < 12; i++) {
        this.nominador += detallePreguntas[i].tRespuestaPregunta;
        console.log("denomidador:" + this.denominador);
      }

      console.log("ARRIBA: " + (this.nominador));
      console.log("ABAJO: " + (this.denominador));
      console.log("RESULTADO: " + (this.nominador / this.denominador));

    return numberAttribute((this.nominador / this.denominador)*100);
  }

  public cargarResultadosUsabilidad(detallePreguntas:DetallePregunta[]):number{

    let _usabilidad=0;
    for (let i=12;i<30;i++)
    {
      _usabilidad+=(detallePreguntas[i].tRespuestaPregunta/(18*7))*100;
    }
return _usabilidad;
  }

  public GetNivelMadurez(indiceCalidad:number){
    if (indiceCalidad<25)return 1;
    else if (indiceCalidad>=25&&indiceCalidad<50) return 2;
    else if (indiceCalidad>=50&&indiceCalidad<70)return 3;
    else if (indiceCalidad>=70&&indiceCalidad<90)return 4;
    else return 5;
  }
}

