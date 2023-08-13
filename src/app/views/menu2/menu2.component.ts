import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/usuario/user.service";

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
  vMenuUsuario?:boolean;
  constructor(public router: Router,private userService:UserService) {
  }
  IrA(url:string): void{

    this.router.navigate([url])
  }
  Validador(): void{

    this.vMenuUsuario= !this.vMenuUsuario;
  }
  GetValidador():boolean{
    // @ts-ignore
    return this.vMenuUsuario;
  }

  CerrarSesion(){
    this.userService.cerrarSesion();
  }
}
