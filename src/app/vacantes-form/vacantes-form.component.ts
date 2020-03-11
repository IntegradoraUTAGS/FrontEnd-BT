import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { vacantesModelo } from '../models/vacantes.model';
import { NgForm } from '@angular/forms';
import { vacantesService } from 'src/app/services/vacante.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'vacantes-form',
  templateUrl: './vacantes-form.component.html',
  styleUrls: ['./vacantes-form.component.css']
})
export class VacantesFormComponent implements OnInit {
  
    @Output() salida = new EventEmitter();
    vacantes: vacantesModelo = new vacantesModelo();

  constructor(private vacantesService: vacantesService) { }
  ngOnInit(): void {
  }
  get currentVacantes(){
    return JSON.stringify(this.vacantes);
  }
  registrar(forma: NgForm) {
    this.vacantesService.registrarVacantes(this.vacantes).then((vacantes: any) => {
      Toast.fire(vacantes.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }

}

