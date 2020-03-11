import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';



@Injectable({
    providedIn: 'root'
  })

  export class UsuarioService {
 url = `http://localhost:3000`;
 constructor(private http: HttpClient) { }

 loginUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/login`, usuario).toPromise();

    registrarUsuario(usuario: UsuarioModel) {
      return this.http.post(`${this.url}/agregar`, usuario).toPromise();

 }
 
   
}
