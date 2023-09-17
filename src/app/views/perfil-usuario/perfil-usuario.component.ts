import {Component, numberAttribute, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IteracionService} from "../../services/IteracionService/iteracion.service";
import {UserService} from "../../services/usuario/user.service";
import {PreguntaService} from "../../services/pregunta/pregunta.service";
import {DetallePreguntaService} from "../../services/detallePregunta/detalle-pregunta.service";
import {Usuario} from "../../entities/Usuario/usuario";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{

  usuario:Usuario={} as Usuario;
  constructor(public router: Router,public _router:ActivatedRoute,
              private  iteracionService: IteracionService,
              private userService: UserService,   private preguntaService: PreguntaService, public detallePreguntaService: DetallePreguntaService) {
  }
  ngOnInit(): void {
    this.ObtenerGruposEvaluacion();

  }



  private ObtenerGruposEvaluacion(){
    this.userService.getCurrentUser().subscribe(dato=>{this.usuario=dato;})
  }

}
