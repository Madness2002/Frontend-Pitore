import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from './helper';
import {Usuario} from "../entities/usuario";
import {JwtRequest} from "../entities/jwt-request";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loginStatusSubjec = new Subject<boolean>();

  constructor(public router: Router,private httpClient: HttpClient) { }

  IrA(url:string): void{

    this.router.navigate([url])
  }
  public añadirUsuario(user:Usuario){
    user.dUsuario= new Date();
    user.imgUsuario="default.png"
    return this.httpClient.post(`${baseUrl}/usuarios/insert`,user);
  }
  public generarToken (user:JwtRequest){

    return this.httpClient.post(`${baseUrl}/generate-token`,user);
  }

  public loginUsuario(jwtRequest: JwtRequest){
    this.generarToken(jwtRequest).subscribe(
      (data:any) => {
        console.log(data);
        localStorage.setItem('token',data.token);
        this.getCurrentUser().subscribe((user:any) => {
          this.setUser(user);
          console.log(user);
        })
        if (this.getUserRole()=="USUARIO") this.IrA("/inicio")
      },(error) => {
        console.log(error);
        alert('Detalles inválidos , vuelva a intentar !!');
      }
    )



  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr==''||tokenStr==null){
      return false;
    }
    else return true;

  }

  public cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.IrA("/login");
    return true;
  }

//obtener token

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
   let userStr= localStorage.getItem('user');
   if(userStr != null){
return JSON.parse(userStr);
   }
   else {
     this.cerrarSesion();
     return null
   }
  }
  public getUserRole(){
let user = this.getUser();
return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.httpClient.get(`${baseUrl}/actual-usuario`)
  }

}
