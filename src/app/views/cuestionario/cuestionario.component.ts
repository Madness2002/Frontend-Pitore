import {Component, numberAttribute, OnInit} from '@angular/core';
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {Usuario} from "../../entities/Usuario/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/usuario/user.service";
import {PreguntaService} from "../../services/pregunta/pregunta.service";
import {Pregunta} from "../../entities/Pregunta/pregunta";
import {DetallePregunta} from "../../entities/DetallePregunta/detalle-pregunta";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {DetallePreguntaService} from "../../services/detallePregunta/detalle-pregunta.service";

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit{
  indiceSend:number=0;
  gruposEvaluacion: GrupoEvaluacion[];
 public iteracion: Iteracion={} as Iteracion;
  preguntas:Pregunta[]=[];
  indicePregunta:number=0;
  detallePreguntas: DetallePregunta[]=[] ;
  detallePregunta: DetallePregunta;
  usuario:Usuario={} as Usuario;
  constructor(public router: Router,public _router:ActivatedRoute,
              private  iteracionService: IteracionService,
              private userService: UserService,   private preguntaService: PreguntaService, public detallePreguntaService: DetallePreguntaService) {
  }
  ngOnInit(): void {
   this.detallePreguntas=[] ;
    this.ObtenerGruposEvaluacion();
  this.ObtenerPreguntas();
let id=numberAttribute(this._router.snapshot.paramMap.get('id'));
      this.iteracionService.listarPorId(id).subscribe(dato=>{this.iteracion=dato;
        this.inicializarDetallePreguntas();})


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

public TerminarCuestionario(){
      this.detallePreguntas[this.indicePregunta].tRespuestaPregunta/=100;
      console.log(this.detallePreguntas[this.indicePregunta].tRespuestaPregunta);
    this.detallePreguntas.forEach((pregunta)=>{
       this.detallePreguntaService.InsertarDetallePregunta(pregunta).subscribe(eny=>{
       });
   })

  this.detallePreguntas=[];
this.IrA("resultado/"+this.iteracion.cIteracion);

}

  IrA(url:string): void{

    this.router.navigate([url])

  }
public Responder(respuesta: number){
    this.detallePreguntas[this.indicePregunta].tRespuestaPregunta=respuesta;
    if (this.indicePregunta>=0&&this.indicePregunta<=5){
      if (respuesta==0)
      this.detallePreguntas[this.indicePregunta+6].fDetallePregunta=false;
      else this.detallePreguntas[this.indicePregunta+6].fDetallePregunta=true;
    }
    if (this.indicePregunta<30){
      this.indicePregunta++;
      while (this.detallePreguntas[this.indicePregunta].fDetallePregunta==false){
        this.indicePregunta++;
      }
    }
}

  public restarIndice(){
    if (this.indicePregunta!=0)
    this.indicePregunta--;
    while (this.detallePreguntas[this.indicePregunta].fDetallePregunta==false){
      this.indicePregunta--;
    }

  }
}
