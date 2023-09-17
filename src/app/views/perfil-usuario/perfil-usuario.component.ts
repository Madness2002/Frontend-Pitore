import {Component, numberAttribute, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";
import {PreguntaService} from "../../services/pregunta/pregunta.service";
import {DetallePreguntaService} from "../../services/detallePregunta/detalle-pregunta.service";
import {Usuario} from "../../entities/Usuario/usuario";
import {ToasterService} from "../../services/toaster.service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{

  usuario:Usuario={} as Usuario;
  constructor(public router: Router,public _router:ActivatedRoute,
              private  iteracionService: IteracionService,
              private userService: UserService,   private preguntaService: PreguntaService, public detallePreguntaService: DetallePreguntaService
  ,public toasterService: ToasterService) {
  }
  ngOnInit(): void {
    this.ObtenerUsuario();
  }

public EliminarUsuario(){
  this.userService.EliminarUsuario(this.usuario).subscribe();
  this.userService.cerrarSesion();
}

  IrA(url:string): void{
    this.router.navigate([url])
  }
public GuardarUsuario() {

    if (this.usuario.username == null ||
        this.usuario.username == undefined ||
        this.usuario.username == "" ||
        this.usuario.nomUsuario == null ||
        this.usuario.nomUsuario == undefined ||
        this.usuario.nomUsuario == "" ||
        this.usuario.password == null ||
        this.usuario.password == undefined ||
        this.usuario.password == "" ||
        this.usuario.confirmPassword == null ||
        this.usuario.confirmPassword == undefined ||
        this.usuario.confirmPassword == ""
    ) {
        this.toasterService.error("¡No olvide llenar todos los campos correctamente!", "Acción denegada");
    } else {
        if (this.usuario.password != this.usuario.confirmPassword) {
            this.toasterService.error("¡Asegúrese de escribir la misma contraseña en los 2 campos!", "Contraseñas diferentes");
        } else {
            console.log(this.usuario);
            this.userService.EditarUsuario(this.usuario).subscribe(result => {
                console.log(result);
                    this.toasterService.success("¡Usuario editado exitosamente!", "Usuario Editado");
                },
                error => {
                    console.log(error);
                    this.toasterService.error("¡Hubo un problema!", "Acción denegada");
                }
            )
        }
    }
}
  private ObtenerUsuario(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;})
  }

}
