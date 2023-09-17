import { Component } from '@angular/core';
import {UserService} from "../../services/usuario/user.service";
import {Usuario} from "../../entities/Usuario/usuario";
import {NgForm} from "@angular/forms";
import {ToasterService} from "../../services/toaster.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
usuario:Usuario = {} as Usuario;
  constructor(private userService:UserService,public toasterService: ToasterService) { }

  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.usuario);

    if (this.usuario.username==null||
      this.usuario.username==undefined||
      this.usuario.username==""||
      this.usuario.nomUsuario==null||
      this.usuario.nomUsuario==undefined||
      this.usuario.nomUsuario==""||
      this.usuario.password==null||
      this.usuario.password==undefined||
      this.usuario.password==""||
      this.usuario.confirmPassword==null||
      this.usuario.confirmPassword==undefined||
      this.usuario.confirmPassword==""
    ) {
      this.toasterService.error("¡No olvide llenar todos los campos correctamente!","Acción denegada");
    }
else{

    if (this.usuario.password!=this.usuario.confirmPassword){
      this.toasterService.error("¡Asegúrese de escribir la misma contraseña en los 2 campos!","Contraseñas diferentes");
    }

    else {
      this.userService.añadirUsuario(this.usuario).subscribe(
        (data) => {
          console.log(data);

this.usuario={} as Usuario;
          this.toasterService.success("¡Usuario creado exitosamente!","Usuario creado");
        },(error) => {
          console.log(error);
            this.toasterService.error("¡Usuario existente!","Acción denegada");
        }
      )

    }


    }
  }


}
