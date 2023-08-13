import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from "../../entities/./usuario";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  vOpciones?:boolean;
  vBuscador?:boolean;
  babies:Usuario[];
  constructor(public router: Router) {
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

}