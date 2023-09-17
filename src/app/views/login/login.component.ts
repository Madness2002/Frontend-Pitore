import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/usuario/user.service";
import {JwtRequest} from "../../entities/Jwt/jwt-request";
import {ToasterService} from "../../services/toaster.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  jwtRequest: JwtRequest = {} as JwtRequest;
  constructor(public router: Router,private userService: UserService,public toasterService: ToasterService ) {

  }

  IrA(url:string): void{

    this.router.navigate([url])
  }

  FormSubmit(){
    if (this.jwtRequest.username==null||this.jwtRequest.password==null||this.jwtRequest.username==""||this.jwtRequest.password=="")
      this.toasterService.error("¡Complete todos los campos!","Campos vacios");
    else this.userService.loginUsuario(this.jwtRequest);

  }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
