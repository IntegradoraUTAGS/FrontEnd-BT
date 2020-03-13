import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioModel } from '../../../src/app/models/usuario';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() salida = new EventEmitter();
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  registrar() {
    this.usuarioService.loginUsuario(this.usuario).then(resp  => {
      console.log('holaa si entre a registrar desde el front');
    // Toast.fire(usuario.msg, '', 'success');
      // forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }
  

}