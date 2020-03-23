import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';
import { RegistrarModel } from '../models/registrar';


@Injectable({
    providedIn: 'root'
  })

  export class UsuarioService {
 url = `http://localhost:3000/usuario`;
 constructor(private http: HttpClient) { }

 loginUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/login`, usuario).toPromise();
 }

 registroUsuario(usuario: RegistrarModel) {
   return this.http.post(`${this.url}/agregar`, usuario).toPromise();
}
 
 }
  
