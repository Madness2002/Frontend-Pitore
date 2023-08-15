import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";
import {Usuario} from "../../entities/Usuario/usuario";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  vOpciones?:boolean;
  vBuscador?:boolean;
  gruposEvaluacion: GrupoEvaluacion[];
  grupoEvaluacion: GrupoEvaluacion;
  grupoEvaluacionCreado:GrupoEvaluacion = {} as GrupoEvaluacion;
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
  constructor(public router: Router, private  grupoEvaluacionService: GrupoEvaluacionService, private iteracionService: IteracionService, private userService: UserService) {
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
    this.ObtenerGruposEvaluacion();
  }
  private ObtenerGruposEvaluacion(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;this.gruposEvaluacion=this.usuario.grupos})
  }

  public CargarIteraciones(id:number){
   this.grupoEvaluacionService.listarPorId(id).subscribe(dato=>{
    this.grupoEvaluacion = dato;
     this.iteraciones= this.grupoEvaluacion.iteraciones})
  }

public AgregarGrupo(){
  this.usuarioInsercion= {} as Usuario;
  this.usuarioInsercion.cusuario=this.usuario.cusuario;
this.grupoEvaluacionCreado.usuario=this.usuarioInsercion;
console.log(this.grupoEvaluacionCreado);
 this.grupoEvaluacionService.añadirGrupoEvaluacion(this.grupoEvaluacionCreado).subscribe(dato=> {
   console.log(dato);this.ObtenerGruposEvaluacion();
 },(event:any)=>{
   if(event.status=='success'){
     //$("form-crear-grupo").modal('hide');
   }


 })
}
}
