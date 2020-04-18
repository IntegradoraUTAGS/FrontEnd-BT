import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { VacantesFormComponent } from './vacantes-form/vacantes-form.component';
import { REComponent } from './re/re.component';
import { RouterModule } from '@angular/router';
import { AltaButtonsComponent } from './alta-buttons/alta-buttons.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { StudentsComponent } from './students/students.component';
import {FormSatisfaccionComponent} from './form-satisfaccion/form-satisfaccion.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';

import { EvaluacionService } from './services/evaluacion.service';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { EliminarEvaluacionComponent } from './eliminar-evaluacion/eliminar-evaluacion.component';


@NgModule({
  declarations: [   
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    REComponent,
    AltaButtonsComponent,
    VacantesFormComponent, 
    FormularioUsuarioComponent,
    StudentsComponent,
    FormSatisfaccionComponent,
    EvaluacionComponent,
    EliminarUsuarioComponent,
    EliminarEvaluacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, //siempre se tiene que poner para cuando no jala los botones, tumbar y volver a cargar
    FormsModule,
    HttpClientModule,
   

    
  ],
  providers: [EvaluacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
