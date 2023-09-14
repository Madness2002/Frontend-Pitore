// @ts-ignore
import Date from "$GLOBAL$";
import {GrupoEvaluacion} from "../GrupoEvaluacion/grupo-evaluacion";

export class Iteracion {
  private _cIteracion: number;
  private _nombIteracion:string;
  private _dIteracion:Date;
private _grupoEvaluacion:GrupoEvaluacion;
private _fRespondido:boolean;
  private _idoneidad:number;
  private _usabilidad:number;
  private _rendimiento:number;
private _tNivel:number;
private _pCalidad:number;

  constructor(cIteracion: number, nombIteracion: string, dIteracion: Date, grupoEvaluacion: GrupoEvaluacion,fRespondido:boolean) {
    this._cIteracion = cIteracion;
    this._nombIteracion = nombIteracion;
    this._dIteracion = dIteracion;
    this._grupoEvaluacion = grupoEvaluacion;
    this._fRespondido=fRespondido;
  }

  get idoneidad(): number {
    return this._idoneidad;
  }

  set idoneidad(value: number) {
    this._idoneidad = value;
  }

  get usabilidad(): number {
    return this._usabilidad;
  }

  set usabilidad(value: number) {
    this._usabilidad = value;
  }

  get rendimiento(): number {
    return this._rendimiento;
  }

  set rendimiento(value: number) {
    this._rendimiento = value;
  }

  get tNivel(): number {
    return this._tNivel;
  }

  set tNivel(value: number) {
    this._tNivel = value;
  }

  get pCalidad(): number {
    return this._pCalidad;
  }

  set pCalidad(value: number) {
    this._pCalidad = value;
  }

  get fRespondido(): boolean {
    return this._fRespondido;
  }

  set fRespondido(value: boolean) {
    this._fRespondido = value;
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
