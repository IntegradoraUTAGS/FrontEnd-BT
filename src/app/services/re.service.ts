import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reModel } from '../models/re.models';

@Injectable({
  providedIn: 'root'
})
export class empresasService {

  url = `http://localhost:3000`;

  constructor(private http: HttpClient) { }
  registrarEmpresa(empresas: reModel) {
    return this.http.post(`${this.url}/empresa/registrar`, empresas).toPromise();
  }
}