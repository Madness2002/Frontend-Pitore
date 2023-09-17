// @ts-ignore
import Date from "$GLOBAL$";
import {GrupoEvaluacion} from "../GrupoEvaluacion/grupo-evaluacion";

export class Usuario {
  private _cusuario: number;
  private _username:string;
  private _nomUsuario:string;
  private _password:string;
  private _confirmPassword:string;
  private _imgUsuario:string;
  private _dUsuario:Date;
private _grupos:GrupoEvaluacion[];


  get grupos(): GrupoEvaluacion[] {
    return this._grupos;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  set grupos(value: GrupoEvaluacion[]) {
    this._grupos = value;
  }

  get cusuario(): number {
    return this._cusuario;
  }

  set cusuario(value: number) {
    this._cusuario = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get nomUsuario(): string {
    return this._nomUsuario;
  }

  set nomUsuario(value: string) {
    this._nomUsuario = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get imgUsuario(): string {
    return this._imgUsuario;
  }

  set imgUsuario(value: string) {
    this._imgUsuario = value;
  }

  get dUsuario(): Date {
    return this._dUsuario;
  }

  set dUsuario(value: Date) {
    this._dUsuario = value;
  }
}
