import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {evaluacionModel} from '../models/evaluacion.models';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  url = `http://172.17.1.7:8099`;

  constructor(private http: HttpClient) { }
  registrarEvaluacion(evaluacion: evaluacionModel){
    return this.http.post(`${this.url}/evaluacion/registrar`,evaluacion ).toPromise();
  }
  
}
