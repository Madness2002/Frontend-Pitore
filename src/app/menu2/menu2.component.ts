import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {
  constructor(public router: Router) {
  }
  IrA(url:string): void{

    this.router.navigate([url])
  }
}
