import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {UsuarioGuard} from "./Guards/usuario.guard";
import {CuestionarioComponent} from "./views/cuestionario/cuestionario.component";
import {ResultadoComponent} from "./views/resultados/resultado/resultado.component";
import {PerfilUsuarioComponent} from "./views/perfil-usuario/perfil-usuario.component";
const routes: Routes = [
  {
    path:'perfil',
    component:PerfilUsuarioComponent,
    canActivate:[UsuarioGuard]
  },
  {
    path:'resultado/:id',
    component:ResultadoComponent,
    canActivate:[UsuarioGuard]
  },
  {
    path:'cuestionario/:id',
    component:CuestionarioComponent,
    canActivate:[UsuarioGuard]
  },
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
