import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reModel } from '../models/re.models';

@Injectable({
  providedIn: 'root'
})
export class reService {
  url = `http://172.17.1.7:6399`;

  constructor(private http: HttpClient) { }
  re(re: reModel) {
    return this.http.post(`${this.url}/registrarEmpresa/empresa/registrar`, re).toPromise();
  }
}