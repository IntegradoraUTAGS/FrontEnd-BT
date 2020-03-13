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
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [   
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    REComponent,
    AltaButtonsComponent,
    VacantesFormComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, //siempre se tiene que poner para cuando no jala los botones, tumbar y volver a cargar
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
