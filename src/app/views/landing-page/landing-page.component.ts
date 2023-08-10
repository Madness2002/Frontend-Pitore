import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(public router: Router) {

  }
  getURL():string{
    return this.router.url;

  }
  IrA(url:string): void{

    this.router.navigate([url])
  }

}
