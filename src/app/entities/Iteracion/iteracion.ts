// @ts-ignore
import Date from "$GLOBAL$";
import {GrupoEvaluacion} from "../GrupoEvaluacion/grupo-evaluacion";

export class Iteracion {
  private _cIteracion: number;
  private _nombIteracion:string;
  private _dIteracion:Date;
private _grupoEvaluacion:GrupoEvaluacion;


  constructor(cIteracion: number, nombIteracion: string, dIteracion: Date, grupoEvaluacion: GrupoEvaluacion) {
    this._cIteracion = cIteracion;
    this._nombIteracion = nombIteracion;
    this._dIteracion = dIteracion;
    this._grupoEvaluacion = grupoEvaluacion;
  }

  get grupoEvaluacion(): GrupoEvaluacion {
    return this._grupoEvaluacion;
  }

  set grupoEvaluacion(value: GrupoEvaluacion) {
    this._grupoEvaluacion = value;
  }

  get cIteracion(): number {
    return this._cIteracion;
  }

  set cIteracion(value: number) {
    this._cIteracion = value;
  }

  get nombIteracion(): string {
    return this._nombIteracion;
  }

  set nombIteracion(value: string) {
    this._nombIteracion = value;
  }

  get dIteracion(): Date {
    return this._dIteracion;
  }

  set dIteracion(value: Date) {
    this._dIteracion = value;
  }
}
