import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistrarModel } from 'src/app/Models/registrar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 })
@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  @Output() salida = new EventEmitter();
  usuario: RegistrarModel = new RegistrarModel();
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

 insertar() {
    this.usuarioService.registroUsuario(this.usuario).then(resp  => {
      console.log('holaa si entre a registrar desde el front');
    // Toast.fire(usuario.msg, '', 'success');
      // forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }
}
