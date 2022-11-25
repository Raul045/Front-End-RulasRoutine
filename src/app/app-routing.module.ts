import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Componentes/main-page/main-page.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  {
    path: 'blog',
    component: MainPageComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
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
