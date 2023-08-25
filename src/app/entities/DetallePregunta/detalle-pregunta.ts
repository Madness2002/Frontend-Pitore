import {Iteracion} from "../Iteracion/iteracion";
import {Pregunta} from "../Pregunta/pregunta";


export class DetallePregunta {
  private _cDetallePregunta: number;
  private _iteracion: Iteracion;
  private _pregunta: Pregunta;
  private _tRespuestaPregunta: number;
  private _dDetallePregunta: Date;
  private _fDetallePregunta: boolean;
  get cDetallePregunta(): number {
    return this._cDetallePregunta;
  }

  get tRespuestaPregunta(): number {
    return this._tRespuestaPregunta;
  }

  set tRespuestaPregunta(value: number) {
    this._tRespuestaPregunta = value;
  }

  get dDetallePregunta(): Date {
    return this._dDetallePregunta;
  }

  set dDetallePregunta(value: Date) {
    this._dDetallePregunta = value;
  }

  get fDetallePregunta(): boolean {
    return this._fDetallePregunta;
  }

  set fDetallePregunta(value: boolean) {
    this._fDetallePregunta = value;
  }

  set cDetallePregunta(value: number) {
    this._cDetallePregunta = value;
  }

  get iteracion(): Iteracion {
    return this._iteracion;
  }

  set iteracion(value: Iteracion) {
    this._iteracion = value;
  }

  get pregunta(): Pregunta {
    return this._pregunta;
  }

  set pregunta(value: Pregunta) {
    this._pregunta = value;
  }
}
