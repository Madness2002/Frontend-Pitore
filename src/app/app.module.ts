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
import {FormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./services/security/auth.interceptor";
import { SearchIteracionPipe } from './services/search-iteracion.pipe';
import { CuestionarioComponent } from './views/cuestionario/cuestionario.component';
import { Menu3Component } from './views/menu3/menu3.component';
import { ResultadoComponent } from './views/resultados/resultado/resultado.component';
import { BarraComponent } from './views/barra/barra/barra.component';
import {NgChartsModule} from "ng2-charts";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { Menu4Component } from './views/menu4/menu4.component';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    InicioComponent,
    Menu2Component,
    SearchIteracionPipe,
    CuestionarioComponent,
    Menu3Component,
    ResultadoComponent,
    BarraComponent,
    PerfilUsuarioComponent,
    Menu4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    ToastrModule.forRoot({}),
    BrowserAnimationsModule,
    NgxUiLoaderModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
