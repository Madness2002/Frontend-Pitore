import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public router: Router) {

  }

  getURL():string{
    return this.router.url;

  }
  IrALogin(url:string): void{

    this.router.navigate([url])
  }
}
