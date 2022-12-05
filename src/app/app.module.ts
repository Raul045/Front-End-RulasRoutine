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
import { AltaEjercicioComponent } from './Componentes/alta-ejercicio/alta-ejercicio.component';
import { MakeRutineEComponent } from './Componentes/make-rutine-e/make-rutine-e.component';
import { HistorialComponent } from './Componentes/historial/historial.component';
import { FelicidadesComponent } from './Componentes/felicidades/felicidades.component';

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
    AltaEjercicioComponent,
    MakeRutineEComponent,
    HistorialComponent,
    FelicidadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
