import { EvaluacionService } from './../services/evaluacion.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import {evaluacionModel} from '../models/evaluacion.models';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';



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
  uploadedFiles: Array <File>;
  constructor(private evaluacionService: EvaluacionService ) { }
  

  ngOnInit() {
  }
  get currentVacantes(){
    return JSON.stringify(this.evaluacion);
  }
  regEvaluacion( Forma: NgForm){
    this.evaluacionService.registrarEvaluacion(this.evaluacion).then((resp: any ) => {
      Toast.fire(resp.msg,'guardado','success');
      Forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    })
  }
  onUpload() {
   
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      
    }
    // call service
    this.evaluacionService.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
     
        });
    }
    onfileChange(e) {
      
       this.uploadedFiles = e.target.files;
    }

}
