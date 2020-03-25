import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistrarModel } from '../models/registrar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  constructor(private usuarioService: UsuarioService,private router:Router) { }

  ngOnInit() {
  }

 insertar(form: NgForm) {
    this.usuarioService.registroUsuario(this.usuario).then((resp: any)  => {
      Toast.fire(resp.msg, 'Tus datos han sido guardados ', 'success');
      form.reset();
      this.router.navigate(['/login'])
      this.salida.emit();
      
      
    }).catch((err: any) => {
      Toast.fire(err.error.msg, 'llena todos los campos', 'error');
    });
  }
}
