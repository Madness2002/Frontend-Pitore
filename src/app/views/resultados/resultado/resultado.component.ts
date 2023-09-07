import {Component, numberAttribute, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IteracionService} from "../../../services/IteracionService/iteracion.service";
import {UserService} from "../../../services/usuario/user.service";
import {PreguntaService} from "../../../services/pregunta/pregunta.service";
import {DetallePreguntaService} from "../../../services/detallePregunta/detalle-pregunta.service";
import {DetallePregunta} from "../../../entities/DetallePregunta/detalle-pregunta";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{
  usabilidad:number=0;
rendimiento:number=0;
idoneidad:number=0;
  constructor(public router: Router,public _router:ActivatedRoute,
              private  iteracionService: IteracionService,
              private userService: UserService,   private preguntaService: PreguntaService, public detallePreguntaService: DetallePreguntaService) {
  }
  ngOnInit(): void {
    this.CargarResultados( numberAttribute(this._router.snapshot.paramMap.get('id')));
  }


  CargarResultados(id:number){
   this.detallePreguntaService.cargarResultados(this.idoneidad,this.usabilidad,this.rendimiento,id)
  }







}
