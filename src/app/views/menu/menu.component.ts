import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  @Input() validador: boolean | undefined;
  @Input() validadorRedirect: boolean | undefined;
rediccionInicial?:string;
  
  constructor(public router: Router, private renderer: Renderer2) {
  }


  ngOnInit(): void {
        if (this.validadorRedirect) this.rediccionInicial='/'
    else this.rediccionInicial='/inicio'
   console.log(this.rediccionInicial);

    }
  GetValidador():undefined{
    // @ts-ignore
    return this.validador;
  }
  GetValidadorRedirect():string{
    // @ts-ignore
    return this.validadorRedirect;
  }
  GetURL():string{
    return this.router.url;
  }
  Redireccionar(): void{

    this.router.navigate([this.rediccionInicial])

  }
  IrALogin(url:string): void{

    this.router.navigate([url])
  }
}
