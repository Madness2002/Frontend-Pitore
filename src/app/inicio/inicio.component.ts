import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  vOpciones?:boolean;
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
}
