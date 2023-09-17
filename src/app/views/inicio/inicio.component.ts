import {
  AfterViewInit,
  booleanAttribute,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";
import {Usuario} from "../../entities/Usuario/usuario";
import {Menu2Component} from "../menu2/menu2.component";
import {DetallePregunta} from "../../entities/DetallePregunta/detalle-pregunta";
import {DetallePreguntaService} from "../../services/detallePregunta/detalle-pregunta.service";
import {async, empty, isEmpty, Observable} from "rxjs";
import {ToasterService} from "../../services/toaster.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  vOpciones?:boolean;
  vBuscador?:boolean;
  vOpcionesGrupo?:boolean;
  grupoEvaluacion: GrupoEvaluacion;
  usuario:Usuario={} as Usuario;
  grupoEvaluacionEditado:GrupoEvaluacion = {} as GrupoEvaluacion;
  //arrays


  iteraciones: Iteracion[]=[];
  //crear

  iteracionCreada:Iteracion= { } as Iteracion;
//editados
  iteracionEditada:Iteracion= {} as Iteracion;

//Envio a componentes
  iteracionEnviada:Iteracion = {} as Iteracion;

buscador:string;
  constructor(public router: Router,
              private  grupoEvaluacionService: GrupoEvaluacionService,
              private iteracionService: IteracionService,
              private userService: UserService,public detallePreguntaService:DetallePreguntaService,public toasterService: ToasterService) {
    this.iteracionCreada.fRespondido=false;
}

EnviarIteracion(id: number){
    this.iteracionService.listarPorId(id).subscribe(dato=>{
      this.iteracionEnviada=dato;
    });
}

    procesaPropagar(mensaje:any) {
    console.log(mensaje);
        this.buscador=mensaje;
    }

recibirGrupo(mensaje:any){
    this.grupoEvaluacion=mensaje;
  this.grupoEvaluacionEditado=mensaje;
this.CargarIteraciones(this.grupoEvaluacion.cGrupoEvaluacion);
}

  random(min:number, max:number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  IrA(url:string): void{
    this.router.navigate([url])
  }
  Validador(): void{
    this.vOpciones= !this.vOpciones;
  }




  GetValidador():boolean{
    // @ts-ignore
    return this.vOpciones;
  }


  ValidadorBuscador(): void{
    this.vBuscador= !this.vBuscador;
  }
  GetValidadorBuscador():boolean{
    // @ts-ignore
    return this.vBuscador;
  }
  ngOnInit(): void {

  }
  GetValidadorOpcionesGrupo():boolean{
    // @ts-ignore
    return this.vOpcionesGrupo;
  }
  public EliminarGrupo(){
    this.grupoEvaluacionService.eliminarPorId(this.grupoEvaluacion.cGrupoEvaluacion).subscribe(any =>{
    //  this.ObtenerGruposEvaluacion();
      this.ValidadorOpcionesGrupo();
      window.location.reload();
    });
  }
  public EditarGrupo(){
    if (this.grupoEvaluacionEditado.nomGrupoEvaluacion.trim()!=""||this.grupoEvaluacionEditado.nomGrupoEvaluacion.trim()!=null||this.grupoEvaluacionEditado.nomGrupoEvaluacion.trim()!=undefined){
    this.grupoEvaluacionService.editarGrupoEvaluacion(this.grupoEvaluacionEditado).subscribe(any =>{
      this.ValidadorOpcionesGrupo();
      this.grupoEvaluacionService.listarPorId(this.grupoEvaluacionEditado.cGrupoEvaluacion).subscribe(dato=>{
        this.grupoEvaluacion=dato;
        this.toasterService.success("¡Nombre modificado exitosamente!","Success");
      },error => {
        this.toasterService.error(error,"Error");
      });
    });
    } else {
      this.toasterService.error("¡Campo vacio","Nombre del grupo vacio");
    }
  }
  public CargarIteraciones(id:number){
   this.iteracionService.listarPorGrupoEvaluacion(id).subscribe(dato=>{
     this.iteraciones= dato;})
  }

  ValidadorOpcionesGrupo(): void{
    this.vOpcionesGrupo= !this.vOpcionesGrupo;
  }

public AgregarIteracion(){
      this.iteracionCreada.grupoEvaluacion=this.grupoEvaluacion;
    this.iteracionService.añadirIteracion(this.iteracionCreada).subscribe(
        dato=>{
      this.CargarIteraciones(this.grupoEvaluacion.cGrupoEvaluacion);
          this.toasterService.success("¡Iteración creada exitosamente!","Success");
    },error => {
          this.toasterService.error("Nombre invalido","Error");
        }

    )
}

    public EliminarIteracion(id:number){
        this.iteracionService.eliminarPorId(id).subscribe(any =>{
          this.CargarIteraciones(this.grupoEvaluacion.cGrupoEvaluacion);
          this.vOpciones=!this.vOpciones;
            this.toasterService.warning("La iteración ha sido eliminada","Warning");
        },
          error => {
            this.toasterService.error("No se pudo eliminar la iteración","Error");
          });
    }



  public EditarIteracion(){
    this.iteracionService.editarIteracion(this.iteracionEditada).subscribe(any =>{
      this.CargarIteraciones(this.grupoEvaluacion.cGrupoEvaluacion);
      this.vOpciones=!this.vOpciones;
      this.toasterService.success('¡Iteración editada!', 'Success');
    });
  }

  public CargarIteracionEditada(id:number){
    this.iteracionService.listarPorId(id).subscribe(dato=>{
      this.iteracionEditada=dato;
    })
}


}
