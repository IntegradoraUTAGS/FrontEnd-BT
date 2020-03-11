import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../../Registrar/src/app/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// busca algo de estas librerias es lo que debe faltar
// import {RegistarComponent} from './login/login.component';
// import { FormularioUsuarioComponent } from '../../../Registrar/src/app/formulario-usuario/formulario-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
