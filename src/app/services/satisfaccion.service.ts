import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { satisfaccionModelo } from '../models/satisfaccion.models';

@Injectable({
    providedIn: 'root'
  })
  export class satisfaccionService {
  
    url = `http://localhost:3000`;
  
    constructor(private http: HttpClient) { }
  
    registrarSatisfaccion(satisfaccion: satisfaccionModelo) {
      return this.http.post(`${this.url}/satisfaccion/registrarSatisfaccion`, satisfaccion).toPromise();
    }
  }