import {Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/usuario/user.service";
import {Iteracion} from "../../entities/Iteracion/iteracion";

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
@Output()
nombiteracionBuscar: EventEmitter<string>= new EventEmitter<string>();
texto:string;
  vMenuUsuario?:boolean;

  constructor(public router: Router,private userService:UserService) {
  }

  PropagarNombreIteracion(){
    this.nombiteracionBuscar.emit(this.texto);

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
