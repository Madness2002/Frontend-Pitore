export class Cuestionario {
  private _cCuestionario: number;
  private _tCuestionario:string;


  get cCuestionario(): number {
    return this._cCuestionario;
  }

  set cCuestionario(value: number) {
    this._cCuestionario = value;
  }

  get tCuestionario(): string {
    return this._tCuestionario;
  }

  set tCuestionario(value: string) {
    this._tCuestionario = value;
  }
}
