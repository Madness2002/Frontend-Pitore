import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {Usuario} from "../../entities/Usuario/usuario";
import {Router} from "@angular/router";
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";
import {PreguntaService} from "../../services/pregunta/pregunta.service";
import {Pregunta} from "../../entities/Pregunta/pregunta";
import {DetallePregunta} from "../../entities/DetallePregunta/detalle-pregunta";
import {isArray} from "@angular/compiler-cli/src/ngtsc/annotations/common";
import {iterator} from "rxjs/internal/symbol/iterator";

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit{
  @Output()
  indiceSend: EventEmitter<number>= new EventEmitter<number>();
  gruposEvaluacion: GrupoEvaluacion[];
  @Input()
  iteracion: Iteracion;
  preguntas:Pregunta[]=[];
  indicePregunta:number=0;
  detallePreguntas: DetallePregunta[]=[];
  detallePregunta: DetallePregunta;
  usuario:Usuario={} as Usuario;

  constructor(public router: Router,
              private  grupoEvaluacionService: GrupoEvaluacionService,
              private userService: UserService,   private preguntaService: PreguntaService) {
  }
  ngOnInit(): void {
    this.ObtenerGruposEvaluacion();
  this.ObtenerPreguntas();

  }
private inicializarDetallePreguntas(){

  this.preguntas.forEach(
    (pregunta) =>{
      this.detallePregunta = new DetallePregunta(this.iteracion,pregunta,0,new Date(),true) ;
this.detallePreguntas.push(this.detallePregunta);
    }
  );



}
  private ObtenerGruposEvaluacion(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;this.gruposEvaluacion=this.usuario.grupos})
  }
private ObtenerPreguntas(){
    this.preguntaService.listar().subscribe(dato=>{this.preguntas=dato;this.inicializarDetallePreguntas();console.log(this.detallePreguntas);})
}



public Responder(respuesta: number){

    this.detallePreguntas[this.indicePregunta].tRespuestaPregunta=respuesta;
    if (this.indicePregunta<30){
      this.indicePregunta++;
      this.indiceSend.emit(this.indicePregunta);
    }

}

  public restarIndice(){
    if (this.indicePregunta!=0)
    this.indicePregunta--;
    this.indiceSend.emit(this.indicePregunta);
  }
}
