// @ts-ignore
import Date from "$GLOBAL$";
import {Iteracion} from "../Iteracion/iteracion";
import {Usuario} from "../Usuario/usuario";

export class GrupoEvaluacion {

  private _cGrupoEvaluacion: number;
  private _nomGrupoEvaluacion:string;
  private _dGrupoEvaluacion:Date;
  private _iteraciones:Iteracion[];
private _usuario:Usuario = {} as Usuario;

  constructor(usuario:Usuario) {
    this._usuario=usuario;
  }


  get usuario(): Usuario {
    return this._usuario;
  }

  set usuario(value: Usuario) {
    this._usuario = value;
  }

  get iteraciones(): Iteracion[] {
    return this._iteraciones;
  }

  set iteraciones(value: Iteracion[]) {
    this._iteraciones = value;
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
}
