import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/usuario/user.service";
import {JwtRequest} from "../../entities/Jwt/jwt-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  jwtRequest: JwtRequest = {} as JwtRequest;
  constructor(public router: Router,private userService: UserService ) {

  }

  IrA(url:string): void{

    this.router.navigate([url])
  }

  FormSubmit(){
this.userService.loginUsuario(this.jwtRequest);
  }



}
