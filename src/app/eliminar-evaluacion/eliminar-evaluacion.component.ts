import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { evaluacionModel } from '../models/evaluacion.models';
import { EvaluacionService } from '../services/evaluacion.service';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 })
@Component({
  selector: 'app-eliminar-evaluacion',
  templateUrl: './eliminar-evaluacion.component.html',
  styleUrls: ['./eliminar-evaluacion.component.css']
})
export class EliminarEvaluacionComponent implements OnInit {
  @Output() salida = new EventEmitter();
  evaluacion: evaluacionModel = new evaluacionModel();
  constructor(private evaluacionService:EvaluacionService,private router:Router) { }

  ngOnInit(): void {
  }
  eliminar(form: NgForm ){
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminarlo?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
    this.evaluacionService.eliminareval(this.evaluacion).then((resp: any)  => {
      Toast.fire(resp.msg, 'Tus datos han sido guardados ', 'success');
      form.reset();
      this.router.navigate(['/home'])
      this.salida.emit();
      
      
    }).catch((err: any) => {
      Toast.fire(err.error.msg, 'llena todos los campos', 'error');
    });
  }
  });
}

}
