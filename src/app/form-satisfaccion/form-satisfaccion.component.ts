import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { satisfaccionModelo } from '../models/satisfaccion.models';
import { NgForm } from '@angular/forms';
import {satisfaccionService} from 'src/app/services/satisfaccion.service'; 
// import Swal from 'sweetalert2';

// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
//  });


@Component({
  selector: 'app-form-satisfaccion',
  templateUrl: './form-satisfaccion.component.html',
  styleUrls: ['./form-satisfaccion.component.css']
})
export class FormSatisfaccionComponent implements OnInit {

  @Output() salida = new EventEmitter();
    satisfaccion: satisfaccionModelo = new satisfaccionModelo();

  constructor(private satisfaccionService: satisfaccionService) { }
  ngOnInit(): void {
  }
  get currentSatisfaccion(){
    return JSON.stringify(this.satisfaccion);
  }
  registrarSatisfaccion(forma: NgForm) {

    console.log(this.satisfaccion);
    
    this.satisfaccionService.registrarSatisfaccion(this.satisfaccion).then((satisfaccion: any) => {
      console.log('hola si entre al servicio',satisfaccion);
    console.log(this.satisfaccion);
     // Toast.fire(satisfaccion.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      console.log(err);
      //Toast.fire(err.error.msg, '', 'error');
    });
  }

}
