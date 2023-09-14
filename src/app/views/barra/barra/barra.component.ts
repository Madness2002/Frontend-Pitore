import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GrupoEvaluacion} from "../../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Usuario} from "../../../entities/Usuario/usuario";
import {Router} from "@angular/router";
import {GrupoEvaluacionService} from "../../../services/grupoEvaluacion/grupo-evaluacion.service";
import {IteracionService} from "../../../services/IteracionService/iteracion.service";
import {UserService} from "../../../services/usuario/user.service";
import Swall from "sweetalert2";
import {ToasterService} from "../../../services/toaster.service";
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit{
  colores: string[] =[
    "#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4",
    "#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4",
    "#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4",
    "#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4",
    "#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4"
  ]

@Output()
grupoEvaluacionEventEmitter=new EventEmitter<GrupoEvaluacion>();
  gruposEvaluacion: GrupoEvaluacion[];
  usuarioInsercion:Usuario;
  grupoEvaluacionCreado:GrupoEvaluacion = {} as GrupoEvaluacion;
  usuario:Usuario={} as Usuario;
  grupoEvaluacion: GrupoEvaluacion;

  constructor(public router: Router,
              private  grupoEvaluacionService: GrupoEvaluacionService,
              private iteracionService: IteracionService,
              private userService: UserService,public toasterService: ToasterService) {
  }
  ngOnInit(): void {
    this.ObtenerGruposEvaluacion();
  }
public EnviarGrupo(grupoEnviado:GrupoEvaluacion){
this.grupoEvaluacionEventEmitter.emit(grupoEnviado);
}
  private ObtenerGruposEvaluacion(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;this.gruposEvaluacion=this.usuario.grupos})
  }


  public AgregarGrupo(){
    this.usuarioInsercion= {} as Usuario;
    this.usuarioInsercion.cusuario=this.usuario.cusuario;
    this.grupoEvaluacionCreado.usuario=this.usuarioInsercion;
    console.log(this.grupoEvaluacionCreado);

    this.grupoEvaluacionService.añadirGrupoEvaluacion(this.grupoEvaluacionCreado).subscribe(dato=> {
     this.ObtenerGruposEvaluacion();
      this.toasterService.success("¡Grupo agregado!","Success")

    },(event:any)=>{
      this.toasterService.error(event,"Error")
    })
  }


}
