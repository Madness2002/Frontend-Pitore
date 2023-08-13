import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Usuario} from "../../entities/usuario";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
usuario:Usuario = {} as Usuario;
  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.usuario);
    if(this.usuario.username == '' || this.usuario.username == null){
      alert('El nombre de usuario es requerido !!')
      return;
    }

    this.userService.añadirUsuario(this.usuario).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario registrado con exito en el sistema');
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema !!');
      }
    )
  }


}
