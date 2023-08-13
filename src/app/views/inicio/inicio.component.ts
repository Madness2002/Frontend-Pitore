import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GrupoEvaluacionService} from "../../services/grupoEvaluacion/grupo-evaluacion.service";
import {GrupoEvaluacion} from "../../entities/GrupoEvaluacion/grupo-evaluacion";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  vOpciones?:boolean;
  vBuscador?:boolean;
  gruposEvaluacion: GrupoEvaluacion[];
  constructor(public router: Router, private  grupoEvaluacionService: GrupoEvaluacionService) {
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
  //  this.ObtenerGruposEvaluacion();
  }
  private ObtenerGruposEvaluacion(){
    this.grupoEvaluacionService.listar().subscribe(dato=>{this.gruposEvaluacion=dato})
  }
}
