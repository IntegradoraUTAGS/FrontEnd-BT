import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AltaButtonsComponent} from '../app/alta-buttons/alta-buttons.component';
import { LoginComponent } from './login/login.component';
import { VacantesFormComponent } from './vacantes-form/vacantes-form.component';
import { REComponent } from './re/re.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'altaButtons', component:AltaButtonsComponent},
  {path:'login', component:LoginComponent},
  {path: 'RegEmp', component:REComponent},
  {path: 'vacantesForm', component:VacantesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
