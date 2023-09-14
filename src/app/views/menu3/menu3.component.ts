import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/usuario/user.service";
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component {
  @Output()
  vGoCuestionario: EventEmitter<string>= new EventEmitter<string>();
  vMenuUsuario?:boolean;
  @Input()
indiceSend:number;
  constructor(public router: Router,private userService:UserService) {
  }
  PropagarNombreIteracion(){
    this.vGoCuestionario.emit("prueba");
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
