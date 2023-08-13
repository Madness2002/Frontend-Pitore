import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {UsuarioGuard} from "./Guards/usuario.guard";
const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent,
    canActivate:[UsuarioGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'',
    component:LandingPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
