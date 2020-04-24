import { Component, OnInit,Output, EventEmitter } from '@angular/core';
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
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  @Output() salida = new EventEmitter();
  usuario: RegistrarModel = new RegistrarModel();
  constructor(private usuarioService: UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }
  // eliminar(form: NgForm ){
  //   Swal.fire({
  //     title: `¿Estás seguro qué deseas eliminarlo?`,
  //     text: 'No se pueden revertir los cambios',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Sí.',
  //     cancelButtonText: 'No'
  //   }).then((result) => {
  //     if (result.value) {
  //   this.usuarioService.eliminarusuario(this.usuario).then((resp: any)  => {
  //     Toast.fire(resp.msg, 'Tus datos han sido guardados ', 'success');
  //     form.reset();
  //     this.router.navigate(['/home'])
  //     this.salida.emit();
      
      
  //   }).catch((err: any) => {
  //     Toast.fire(err.error.msg, 'llena todos los campos', 'error');
  //   });
  // }
  // });
// }
}
