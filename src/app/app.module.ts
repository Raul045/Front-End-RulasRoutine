import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Componentes/main-page/main-page.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { UserProfileComponent } from './Componentes/user-profile/user-profile.component';
import { RutineResumeComponent } from './Componentes/rutine-resume/rutine-resume.component';
import { RutineComponent } from './Componentes/rutine/rutine.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MakeRutineComponent } from './Componentes/make-rutine/make-rutine.component';
import { TableUsuariosComponent } from './Componentes/table-usuarios/table-usuarios.component';
import { TableEjerciciosComponent } from './Componentes/table-ejercicios/table-ejercicios.component';
import { RegistrarPesoComponent } from './Componentes/registrar-peso/registrar-peso.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { RutineEjerciciosComponent } from './Componentes/rutine-ejercicios/rutine-ejercicios.component';
import { AltaEntrenadoresComponent } from './Componentes/alta-entrenadores/alta-entrenadores.component';
import { FelicidadesComponent } from './Componentes/felicidades/felicidades.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { EditPerfilComponent } from './Componentes/edit-perfil/edit-perfil.component';
import { NivelesComponent } from './Componentes/niveles/niveles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    RutineResumeComponent,
    RutineComponent,
    MakeRutineComponent,
    TableUsuariosComponent,
    TableEjerciciosComponent,
    RegistrarPesoComponent,
    FooterComponent,
    RutineEjerciciosComponent,
    AltaEntrenadoresComponent,
    FelicidadesComponent,
    PerfilComponent,
    EditPerfilComponent,
    NivelesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
