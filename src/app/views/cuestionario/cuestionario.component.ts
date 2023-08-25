import {Component, Input, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit{
  gruposEvaluacion: GrupoEvaluacion[];
  @Input()
  iteracion: Iteracion;
  preguntas:any;
  indicePregunta:number=0;
  detallePreguntas: DetallePregunta[];
  usuario:Usuario={} as Usuario;

  constructor(public router: Router,
              private  grupoEvaluacionService: GrupoEvaluacionService,
              private userService: UserService,   private preguntaService: PreguntaService) {
  }
  ngOnInit(): void {
    this.ObtenerGruposEvaluacion();
  this.ObtenerPreguntas();
  }

  private ObtenerGruposEvaluacion(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;this.gruposEvaluacion=this.usuario.grupos})
  }
private ObtenerPreguntas(){
    this.preguntaService.listar().subscribe(dato=>{this.preguntas=dato;console.log(dato)})
}
public sumarIndice(){
    if (this.indicePregunta<30)
    this.indicePregunta++;
}

  public restarIndice(){
    if (this.indicePregunta!=0)
    this.indicePregunta--;
  }
}
