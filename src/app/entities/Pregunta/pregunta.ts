import {Cuestionario} from "../Cuestionario/cuestionario";

export class Pregunta {
  private _cPregunta: number;
  private _tPregunta:string;
  private _cuestionario:Cuestionario;


  get cPregunta(): number {
    return this._cPregunta;
  }

  set cPregunta(value: number) {
    this._cPregunta = value;
  }

  get tPregunta(): string {
    return this._tPregunta;
  }

  set tPregunta(value: string) {
    this._tPregunta = value;
  }

  get cuestionario(): Cuestionario {
    return this._cuestionario;
  }

  set cuestionario(value: Cuestionario) {
    this._cuestionario = value;
  }
}
