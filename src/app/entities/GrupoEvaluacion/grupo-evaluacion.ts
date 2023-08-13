import {Usuario} from "../Usuario/usuario";
// @ts-ignore
import Date from "$GLOBAL$";

export class GrupoEvaluacion {

  private _cGrupoEvaluacion: number;
  private _nomGrupoEvaluacion:string;
  private _dGrupoEvaluacion:Date;
  private _usuario: Usuario;


  constructor(cGrupoEvaluacion: number, nomGrupoEvaluacion: string, dGrupoEvaluacion: Date, usuario: Usuario) {
    this._cGrupoEvaluacion = cGrupoEvaluacion;
    this._nomGrupoEvaluacion = nomGrupoEvaluacion;
    this._dGrupoEvaluacion = dGrupoEvaluacion;
    this._usuario = usuario;
  }


  get cGrupoEvaluacion(): number {
    return this._cGrupoEvaluacion;
  }

  set cGrupoEvaluacion(value: number) {
    this._cGrupoEvaluacion = value;
  }

  get nomGrupoEvaluacion(): string {
    return this._nomGrupoEvaluacion;
  }

  set nomGrupoEvaluacion(value: string) {
    this._nomGrupoEvaluacion = value;
  }


  get dGrupoEvaluacion(): Date {
    return this._dGrupoEvaluacion;
  }

  set dGrupoEvaluacion(value: Date) {
    this._dGrupoEvaluacion = value;
  }

  get usuario(): Usuario {
    return this._usuario;
  }

  set usuario(value: Usuario) {
    this._usuario = value;
  }
}
