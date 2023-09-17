import { Component } from '@angular/core';
import {Usuario} from "../../entities/Usuario/usuario";
import {Router} from "@angular/router";
import {UserService} from "../../services/usuario/user.service";

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component {

  vMenuUsuario?:boolean;
  usuario:Usuario={} as Usuario;
  constructor(public router: Router,private userService:UserService) {
    this.userService.getCurrentUser().subscribe(dato=>{
      this.usuario=dato;
    });
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
