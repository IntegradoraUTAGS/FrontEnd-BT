import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vacantesModelo } from '../models/vacantes.models';

@Injectable({
  providedIn: 'root'
})
export class vacantesService {

  url = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  registrarVacantes(vacantes: vacantesModelo) {
    return this.http.post(`${this.url}/vacantes/registrar`, vacantes).toPromise();
  }
}