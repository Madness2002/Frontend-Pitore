import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";
import {Iteracion} from "../../entities/Iteracion/iteracion";
import {IteracionService} from "../../services/IteracionService/iteracion.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  vOpciones?:boolean;
  vBuscador?:boolean;
  gruposEvaluacion: GrupoEvaluacion[];
  grupoEvaluacion: GrupoEvaluacion
  colores: string[] =[
"#77dd77",
    "#FFA477",
    "#fdcae1",
    "#84b6f4"
  ];

  iteraciones: Iteracion[];

  constructor(public router: Router, private  grupoEvaluacionService: GrupoEvaluacionService, private iteracionService: IteracionService) {
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
    this.grupoEvaluacionService.listar().subscribe(dato=>{this.gruposEvaluacion=dato})
  }

  public CargarIteraciones(id:number){
   this.grupoEvaluacionService.listarPorId(id).subscribe(dato=>{
    this.grupoEvaluacion = dato;
     this.iteraciones= this.grupoEvaluacion.iteraciones})
  }


}
