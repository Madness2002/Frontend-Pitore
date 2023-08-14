// @ts-ignore
import Date from "$GLOBAL$";

export class Iteracion {
  private _cIteracion: number;
  private _nombIteracion:string;
  private _dIteracion:Date;


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
