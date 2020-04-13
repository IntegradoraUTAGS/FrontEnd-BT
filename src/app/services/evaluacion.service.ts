import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {evaluacionModel} from '../models/evaluacion.models';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  url = `http://localhost:3000`;

  constructor(private http: HttpClient) { }
  registrarEvaluacion(evaluacion: evaluacionModel){
    return this.http.post(`${this.url}/evaluacion/registrar`,evaluacion ).toPromise();
  }
  
}
