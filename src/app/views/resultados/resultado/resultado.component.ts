import {Component, numberAttribute, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IteracionService} from "../../../services/IteracionService/iteracion.service";
import {UserService} from "../../../services/usuario/user.service";
import {PreguntaService} from "../../../services/pregunta/pregunta.service";
import {DetallePreguntaService} from "../../../services/detallePregunta/detalle-pregunta.service";
import {DetallePregunta} from "../../../entities/DetallePregunta/detalle-pregunta";
import {Iteracion} from "../../../entities/Iteracion/iteracion";
import { ChartConfiguration } from 'chart.js';
import {Observable, of} from 'rxjs';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{

  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Idoneidad', 'Usabilidad', 'Rendimiento' ],
    datasets: [
      { data: [ 65, 59, 80 ],backgroundColor: '#0097A2'}
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,layout:{padding:15} ,scales:{
      y: {
        max:100,
        grid: {
          color: 'white',
          tickColor: 'black'
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, ticks) {
            return  value+'%';
          }
        }
      },
      x:{
        grid: {
          color: 'white',
          tickColor: 'white'
        }
      }
    }

  };


  usabilidad:number=0;
rendimiento:number=0;
idoneidad:number=0;
indiceCalidad:number=0;
detallePreguntas:DetallePregunta[]=[];
iteracion:Iteracion={} as Iteracion;
nivelMadurez:number={} as number;
  constructor(public router: Router,public _router:ActivatedRoute,
              private  iteracionService: IteracionService,
              private userService: UserService,   private preguntaService: PreguntaService, public detallePreguntaService: DetallePreguntaService) {
  }
  IrA(url:string): void{

    this.router.navigate([url])

  }
  ngOnInit(): void {
    this.detallePreguntaService.listarPorIdIteracion(numberAttribute(this._router.snapshot.paramMap.get('id'))).subscribe(dato=>{
      this.detallePreguntas=dato;
      this.CargarResultados(this.detallePreguntas);
      this.rendimiento=this.detallePreguntas[30].tRespuestaPregunta*100;
      this.indiceCalidad=(this.usabilidad+this.rendimiento+this.idoneidad)/3;
      this.iteracionService.listarPorId(numberAttribute(this._router.snapshot.paramMap.get('id'))).subscribe(result=>{
        this.iteracion=result;
        this.nivelMadurez=this.detallePreguntaService.GetNivelMadurez(this.indiceCalidad);
       this.barChartData={
          labels: [ 'Idoneidad', 'Usabilidad', 'Rendimiento' ],
          datasets: [
            { data: [ this.idoneidad, this.usabilidad, this.rendimiento ],backgroundColor: '#0097A2',label:"ga",}
          ],

        };
      })
    })
  }
   CargarResultados(detallePreguntas:DetallePregunta[]) {
    this.idoneidad = this.detallePreguntaService.cargarResultadosIdoneidad(detallePreguntas);
    this.usabilidad = this.detallePreguntaService.cargarResultadosUsabilidad(detallePreguntas);
  }
}
