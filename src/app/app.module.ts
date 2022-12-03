import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Componentes/main-page/main-page.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { UserProfileComponent } from './Componentes/user-profile/user-profile.component';
import { RutineResumeComponent } from './Componentes/rutine-resume/rutine-resume.component';
import { RutineComponent } from './Componentes/rutine/rutine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MakeRutineComponent } from './Componentes/make-rutine/make-rutine.component';
// import { MyInterceptor } from './interceptors/myinterceptor';
import { TableUsuariosComponent } from './Componentes/table-usuarios/table-usuarios.component';
import { TableEjerciciosComponent } from './Componentes/table-ejercicios/table-ejercicios.component';
import { RegistrarPesoComponent } from './Componentes/registrar-peso/registrar-peso.component';
import { FooterComponent } from './Componentes/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
