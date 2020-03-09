import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './home/pages/pages.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { RegEmpComponent } from './reg-emp/reg-emp.component';
import { VacanteFormComponent } from './vacante-form/vacante-form.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    RegEmpComponent,
    FormVacanteComponent,
    VacanteFormComponent,
    ModelsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
