// @ts-ignore
import Date from "$GLOBAL$";
import {Iteracion} from "../Iteracion/iteracion";

export class GrupoEvaluacion {

  private _cGrupoEvaluacion: number;
  private _nomGrupoEvaluacion:string;
  private _dGrupoEvaluacion:Date;
  private _iteraciones:Iteracion[];


  constructor(cGrupoEvaluacion: number, nomGrupoEvaluacion: string, dGrupoEvaluacion:Date, iteraciones: Iteracion[]) {
    this._cGrupoEvaluacion = cGrupoEvaluacion;
    this._nomGrupoEvaluacion = nomGrupoEvaluacion;
    this._dGrupoEvaluacion = dGrupoEvaluacion;
    this._iteraciones = iteraciones;
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
