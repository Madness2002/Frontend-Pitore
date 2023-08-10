import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './views/register/register.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { Menu2Component } from './views/menu2/menu2.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    InicioComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
