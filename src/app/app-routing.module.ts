import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Componentes/main-page/main-page.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MakeRutineComponent } from './Componentes/make-rutine/make-rutine.component';
import { RutineResumeComponent } from './Componentes/rutine-resume/rutine-resume.component';
import { RegistrarPesoComponent } from './Componentes/registrar-peso/registrar-peso.component';
import { TableUsuariosComponent } from './Componentes/table-usuarios/table-usuarios.component';
import { TableEjerciciosComponent } from './Componentes/table-ejercicios/table-ejercicios.component';
import { RutineEjerciciosComponent } from './Componentes/rutine-ejercicios/rutine-ejercicios.component';

const routes: Routes = [
  {
    path: 'ejercicios',
    component: TableEjerciciosComponent
  },
  {
    path: 'usuarios',
    component: TableUsuariosComponent
  },
  {
    path: 'crear-rutina',
    component: MakeRutineComponent
  },
  {
    path: 'rutina',
    component: RutineResumeComponent
  },
  {
    path: 'ejercicios-rutina',
    component: RutineEjerciciosComponent
  },
  {
    path: 'blog',
    component: MainPageComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'registro-peso',
    component: RegistrarPesoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/blog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
