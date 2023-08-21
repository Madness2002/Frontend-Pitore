import { Component } from '@angular/core';
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {Usuario} from "../../entities/Usuario/usuario";
import {Router} from "@angular/router";
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  vOpciones?:boolean;
  vBuscador?:boolean;
  vOpcionesGrupo?:boolean;
  gruposEvaluacion: GrupoEvaluacion[];
  grupoEvaluacion: GrupoEvaluacion;
  grupoEvaluacionCreado:GrupoEvaluacion = {} as GrupoEvaluacion;
  grupoEvaluacionEditado:GrupoEvaluacion = {} as GrupoEvaluacion;
  iteracionCreada:Iteracion= {} as Iteracion;
  iteracionEditada:Iteracion= {} as Iteracion;
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
  ];
  iteraciones: Iteracion[];
  usuario:Usuario={} as Usuario;
  usuarioInsercion:Usuario;
  buscador:string;
  constructor(public router: Router,
              private  grupoEvaluacionService: GrupoEvaluacionService,
              private iteracionService: IteracionService,
              private userService: UserService) {
  }

  public CargarIteraciones(id:number){
    this.grupoEvaluacionService.listarPorId(id).subscribe(dato=>{
      this.grupoEvaluacion = dato;
      this.grupoEvaluacionEditado=dato;
      this.iteraciones= this.grupoEvaluacion.iteraciones})
  }

}
