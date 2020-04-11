import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { vacantesModelo } from '../models/vacantes.models';
import { NgForm } from '@angular/forms';
import { vacantesService } from 'src/app/services/vacante.service';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';

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
	
	DownloadPDF() {
      const doc = new jsPDF();
      // tslint:disable-next-line:only-arrow-functions

      doc.text('Perfil: ' + this.vacantes.perfil , 40, 10);
      doc.text('requiere: ' + this.vacantes.requiere , 40, 20);
      doc.text('prestaciones:  ' + this.vacantes.prestaciones , 40, 30);
      doc.text('dirigidoA: ' + this.vacantes.dirigidoA  , 40, 40);
      doc.text('dirigidopersona: ' + this.vacantes.dirigidoPersona , 40, 50);
      doc.text('Idioma: ' + this.vacantes.idioma , 40, 60);
      doc.text('Fecha Limite: ' + this.vacantes.fechaLimite , 40, 70);
      doc.save('vacante.pdf');
    }

  constructor(private vacantesService: vacantesService) { }
  ngOnInit(): void {
  }
  get currentVacantes(){
    return JSON.stringify(this.vacantes);
  }
  registrar(forma: NgForm) {

    console.log(this.vacantes);
    
    this.vacantesService.registrarVacantes(this.vacantes).then((vacantes: any) => {
      Toast.fire(vacantes.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }

}

