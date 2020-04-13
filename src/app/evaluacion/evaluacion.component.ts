import { EvaluacionService } from './../services/evaluacion.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import {evaluacionModel} from '../models/evaluacion.models';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
 
  @Output() salida = new EventEmitter();
  evaluacion: evaluacionModel = new evaluacionModel();
  constructor(private EvaluacionService: EvaluacionService) { }

  ngOnInit(): void {
  }
  get currentVacantes(){
    return JSON.stringify(this.evaluacion);
  }
  regEvaluacion(form:NgForm){
    this.EvaluacionService.registrarEvaluacion(this.evaluacion).then((eva:any)=>{
      Toast.fire(eva.msg,'','success');
      form.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    })
  }

}
